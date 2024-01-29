#!/usr/bin/env node
import {
  buildOrWatch,
} from '@aztlan/build-tools'

buildOrWatch({
  entryPoints:['./src/**/*.{ts,tsx,js,jsx}'],
})
