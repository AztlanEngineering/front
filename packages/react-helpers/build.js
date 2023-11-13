const { build } = require('esbuild')
const glob = require('resolve-glob')

const arguments = process.argv
const indexOfFormat = arguments.indexOf('--format') + 1
const format = indexOfFormat ? arguments.at(indexOfFormat) : undefined
if (!format) {
  console.error('No --format was provided. Options are cjs and esm.')
}

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

build({
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
