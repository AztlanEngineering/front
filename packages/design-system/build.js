const { build } = require('esbuild');
const copyfiles = require('copyfiles')
const glob = require('resolve-glob');

var arguments = process.argv ;
const indexOfFormat = arguments.indexOf("--format") + 1
const format = indexOfFormat ? arguments.at(indexOfFormat) : undefined;
if (!format) {
  console.error('No --format was provided. Options are cjs and esm.')
}

const options = {ignore: ["**/*.test.js", "**/*.spec.js", "**/*.stories.js"]};
const entryPoints = glob.sync(
  [
    "./src/ui/**/*.ts",
    "./src/ui/**/*.tsx",
    "./src/ui/**/*.js",
    "./src/ui/**/*.jsx"
  ],
  options)

build({
  entryPoints: entryPoints,
  outdir:`dist/${format}/`,
  //target:"cjs", 
  format,
  logLevel: 'debug',
  outExtension:{ '.js': `.${format === 'cjs' ? 'cjs' : 'mjs'}` },
  supported:{
    // https://esbuild.github.io/api/#supported
    "object-rest-spread":true
  }
  // ...
}).catch(() => process.exit(1))

copyfiles([
  "src/ui/**/*.scss",
  "src/ui/**/*.css",
  `dist/${format}`
], {
  'up':2,
  verbose:true,
}, (args) =>console.log(args))
