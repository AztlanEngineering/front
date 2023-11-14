import tools from '@aztlan/build-tools'

tools.buildOrWatch({
  entryPoints:[
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  copyfiles:[
    'src/ui/**/*.scss',
    'src/ui/**/*.css',
  ],
  // copyfilesUp:2,
})
