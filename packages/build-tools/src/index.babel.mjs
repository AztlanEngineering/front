import glob from 'resolve-glob'
import fs from 'fs'
import copyfiles from 'copyfiles'
import * as babel from '@babel/core'

import path from 'path'
import {
  fileURLToPath,
} from 'url'

const generateOutputPaths = (
  result, format, outputExtension, slice = 1,
) => {
  const split = result.options.filename.split('/')
  const entryFilename = split.pop()

  const outputFilename = entryFilename.replace(
    '.tsx', `${outputExtension}`,
  ).replace(
    '.ts', `${outputExtension}`,
  )

  const dirname = result.options.root
  // const dirname2 = result.options.cwd

  const relativePath = split.join('/').replace(
    dirname, '',
  ).split('/').slice(1 + slice)
    .join('/')
  const outputFolder = path.join(
    dirname, 'dist', format, relativePath,
  )
  const outputPath = path.join(
    outputFolder, outputFilename,
  )

  return {
    outputPath,
    outputFolder,
  }
}

const buildOrWatch = async (config) => {
  const dirname = process.cwd()
  const up = config.up ?? 1

  const args = process.argv
  const indexOfFormat = args.indexOf('--format') + 1
  const format = indexOfFormat ? args.at(indexOfFormat) : undefined
  if (!format) {
    console.error('No --format was provided. Options are cjs and esm.')
  }
  const watch = args.indexOf('--watch') > 0
  const entryPoints = glob.sync(
    config.entryPoints, {
      ignore:config.ignore, // ['**/*.test.js', '**/*.spec.js', '**/*.stories.js']
    },
  )
  const outputExtension = (format === 'cjs') ? '.cjs' : '.mjs'

  entryPoints.forEach((filename) => {
    let presetEnv = {
      // moduleResolverRoots: ['./src'],
    }
    presetEnv = (format === 'cjs') ? {
      ...presetEnv,
      modules:'commonjs',
      targets:'defaults',
      include:['transform-export-namespace-from'],
    } : {
      ...presetEnv,
      modules:false,
      targets:{
        esmodules:true,
        chrome   :'120',
      },
    }

    babel.transformFile(
      filename,
      {
        caller:{
          name             :'@aztlan/build-tools',
          supportsStaticESM:format === 'esm',
          // supportsExportNamespaceFrom: true,
        },
        presets:[
          ['@babel/preset-env', presetEnv],
          '@babel/preset-react',
          '@babel/preset-typescript',

        ],
        plugins:[
          [
            '@aztlan/replace-import-extension',
            {
              extMapping:{
                '.graphql':'.graphql.js',
                '.ts'     :outputExtension,
                '.tsx'    :outputExtension,
              // '.js': "js",
              },
              disableDyanmicImportTransform:true,
            },
          ],
          [
            'relay',
            {
              eagerEsModules:format === 'esm',
              codegenCommand:'exit 0',
            },
          ],
        ],
      },
      (
        err, result,
      ) => {
        if (err) {
          console.error(err)
        }
        const extension = result.options.filename.includes('.graphql') ? '.js' : outputExtension

        const {
          outputPath,
          outputFolder,
        } = generateOutputPaths(
          result,
          format,
          extension,
          up,
        )
        fs.mkdirSync(
          outputFolder, {
            recursive:true,
          },
        )
        fs.writeFileSync(
          outputPath, result.code,
        )
        console.log(
          'compiled: ', outputPath,
        )

        // console.log(result) // => { code, map, ast }
      },
    )
  })

  if (config.copyfiles) {
    copyfiles(
      [...config.copyfiles, `${dirname}/dist/${format}`],
      {
        up     :config.up || 2,
        verbose:true,
      },
      (a) => console.log(a),
    )
  }
}

export {
  buildOrWatch,
}
