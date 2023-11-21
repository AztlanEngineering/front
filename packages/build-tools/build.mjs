#!/usr/bin/env node
import { buildOrWatch } from './src/index.babel.mjs'

buildOrWatch({
  entryPoints: [
    './src/**/*.mjs',
  ],
})
