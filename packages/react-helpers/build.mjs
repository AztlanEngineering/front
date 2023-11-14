import tools from '@aztlan/build-tools'

tools.buildOrWatch({
  location   :import.meta.url,
  entryPoints:[
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
})
