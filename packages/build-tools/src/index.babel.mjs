import glob from 'resolve-glob'
import fs from 'fs'
import copyfiles from 'copyfiles'
import * as babel from '@babel/core'

import path from 'path'
import { fileURLToPath } from 'url'

const generateOutputPaths = (result, format, outputExtension) => {
  const split = result.options.filename.split('/')
  const entryFilename = split.pop()

  const outputFilename = entryFilename.replace('.tsx', `${outputExtension}`).replace('.ts', `${outputExtension}`)

  const dirname = result.options.root
  // const dirname = result.options.cwd
  //
  const relativePath = split.join('/').replace(dirname, '').split('/').slice(2)
    .join('/')
  const outputFolder = path.join('dist', format, relativePath)
  const outputPath = path.join(outputFolder, outputFilename)

  return {
    outputPath,
    outputFolder,
  }
}

const buildOrWatch = async (config) => {
  const dn = process.cwd()

  const args = process.argv
  const indexOfFormat = args.indexOf('--format') + 1
  const format = indexOfFormat ? args.at(indexOfFormat) : undefined
  if (!format) {
    console.error('No --format was provided. Options are cjs and esm.')
  }
  const watch = args.indexOf('--watch') > 0
  const entryPoints = glob.sync(config.entryPoints, {
    ignore: config.ignore, // ['**/*.test.js', '**/*.spec.js', '**/*.stories.js']
  })
  const outputExtension = (format === 'cjs') ? '.cjs' : '.mjs'

  entryPoints.forEach((filename) => {
    let presetEnv = {
      // moduleResolverRoots: ['./src'],
    }
    presetEnv = (format === 'cjs') ? {
      ...presetEnv,
      modules: 'commonjs',
      targets: 'defaults',
    } : {
      ...presetEnv,
      modules: false,
      targets: { chrome: '111' },
    }

    babel.transformFile(
      filename,
      {
        caller: {
          name: '@aztlan/build-tools',
          // supportsStaticESM: format === 'esm',
        },
        presets: [
          [
            '@babel/preset-env',
            presetEnv,
          ],
          '@babel/preset-react',
          '@babel/preset-typescript',

        ],
        plugins: [
          ['replace-import-extension', {
            extMapping: {
              '.ts': outputExtension,
              '.tsx': outputExtension,
              '.js': outputExtension,
            },
          }],
        ],
      },
      (err, result) => {
        if (err) {
          console.error(err)
        }
        const {
          outputPath,
          outputFolder,
        } = generateOutputPaths(
          result,
          format,
          outputExtension,
        )
        fs.mkdirSync(outputFolder, { recursive: true })
        fs.writeFileSync(path.join(outputFolder, 'test.js'), 'content')
        fs.writeFileSync(outputPath, result.code)
        console.log(outputPath)

        // console.log(result) // => { code, map, ast }
      },
    )
  })

  if (config.copyfiles) {
    copyfiles(
      [...config.copyfiles, `${dn}/dist/${format}`],
      {
        up: config.copyfilesUp || 2,
        verbose: true,
      },
      (a) => console.log(a),
    )
  }
}

export { buildOrWatch }
