#!/usr/bin/env node
import { buildOrWatch } from '@aztlan/build-tools'

buildOrWatch({
  // Hack to disable bundle mode with extensions plugin
  external   :['./src/*', './src/relay/*'],
  entryPoints:[
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
})
