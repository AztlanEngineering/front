#!/usr/bin/env node
import { buildOrWatch } from '@aztlan/build-tools'

buildOrWatch({
  location   :import.meta.url,
  entryPoints:[
    './src/**/*.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
})
