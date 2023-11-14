#!/usr/bin/env node
import { buildOrWatch } from './src/index.mjs'

buildOrWatch({
  location   :import.meta.url,
  entryPoints:[
    './src/**/*.mjs',
  ],
})
