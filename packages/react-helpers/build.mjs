import * as esbuild from 'esbuild'
import glob from 'resolve-glob'

const args = process.argv
const indexOfFormat = args.indexOf('--format') + 1
const format = indexOfFormat ? args.at(indexOfFormat) : undefined
if (!format) {
  console.error('No --format was provided. Options are cjs and esm.')
}
const watch = args.indexOf('--watch') > 0

const options = { ignore: ['**/*.test.js', '**/*.spec.js', '**/*.stories.js'] }
const entryPoints = glob.sync(
  [
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  options,
)
if (watch) {
  const ctx = await esbuild.context({
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
  })

  await ctx.watch()
  console.log('watching...')
} else {
  esbuild.build({
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
  // ...
  }).catch(() => process.exit(1))
}
