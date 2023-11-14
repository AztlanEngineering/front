import * as esbuild from 'esbuild'
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions'
import glob from 'resolve-glob'
import copyfiles from 'copyfiles'

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const buildOrWatch = async (config) => {
  const getDirname = (typeof __dirname === 'undefined') ? dirname(fileURLToPath(config.location || import.meta.url)) : __dirname
  const location = getDirname(config.location)

  const args = process.argv
  const indexOfFormat = args.indexOf('--format') + 1
  const format = indexOfFormat ? args.at(indexOfFormat) : undefined
  if (!format) {
    console.error('No --format was provided. Options are cjs and esm.')
  }
  const watch = args.indexOf('--watch') > 0
  const entryPoints = glob.sync(config.entryPoints, {
    ignore:config.ignore, // ['**/*.test.js', '**/*.spec.js', '**/*.stories.js']
  })

  const indexFiles = entryPoints.filter((name) => name.endsWith('index.ts'))
  const mainFiles = entryPoints.filter((name) => !name.endsWith('index.ts'))

  const buildArgs = {
    entryPoints,
    outdir      :`dist/${format}/`,
    // target:"cjs",
    format,
    logLevel    :'debug',
    outExtension:{ '.js': `.${format === 'cjs' ? 'cjs' : 'mjs'}` },
    supported   :{
      // https://esbuild.github.io/api/#supported
      'object-rest-spread':true,
    },
    metafile:true,
    // external:['*.scss', 'node_modules/*', '../../node_modules/*'],
  }
  const indexBuildArgs = {
    ...buildArgs,
    entryPoints:indexFiles,
    bundle     :true,
    plugins    :[
      esbuildPluginFilePathExtensions({
        esm:format === 'esm',
        // filter:/.*index.*/,
      }),
    ],
  }

  const mainBuildArgs = {
    ...buildArgs,
    entryPoints:mainFiles,
  }
  if (watch) {
    const ctx = await esbuild.context(buildArgs)

    await ctx.watch()
    console.log('watching...')
  } else {
    const result = await esbuild
      .build(indexBuildArgs)
      .catch(() => process.exit(1))
    console.log(
      await esbuild.analyzeMetafile(result.metafile, { verbose: true }),
    )

    const result2 = await esbuild
      .build(mainBuildArgs)
      .catch(() => process.exit(1))
    console.log(
      await esbuild.analyzeMetafile(result.metafile, { verbose: true }),
    )
  }
  if (config.copyfiles) {
    copyfiles(
      [...config.copyfiles, `${location}/dist/${format}`],
      {
        up     :config.copyfilesUp || 2,
        verbose:true,
      },
      (a) => console.log(a),
    )
  }
}

export { buildOrWatch }
