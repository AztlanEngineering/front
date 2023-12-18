#!/usr/bin/env node
import {
  buildOrWatch,
} from '@aztlan/build-tools'

buildOrWatch({
  entryPoints:['./src/**/*.{ts,tsx,js,jsx}'],
  ignore     :['./**/*.stories.tsx'],
  copyfiles  :[
    'src/ui/*.scss',
    'src/ui/**/*.scss',
    'src/ui/**/*.css',
    // 'src/ui/**/*.graphql',
  ],
  up:2,
})
