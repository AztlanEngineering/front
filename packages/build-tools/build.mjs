#!/usr/bin/env node
import { buildOrWatch } from './src/index.mjs'

buildOrWatch({
  entryPoints:[
    './src/**/*.mjs',
  ],
})
