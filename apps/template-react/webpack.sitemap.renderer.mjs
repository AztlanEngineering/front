import {
  configureSharedConfig,
} from '@aztlan/webpack-config'

const {
  entry,
  experiments,
  externals,
  outputSSR: output,
  resolve,
  rules,
} = configureSharedConfig({
  entry            :'src/sitemap/renderer.ts',
  outputSSRFilename:'sitemap.js',
})

export default {
  mode   :'production',
  target :'node18',
  entry,
  resolve,
  output,
  // TODO document why
  experiments,
  externals,
  plugins:[],
  module :{
    rules:[rules.ts],
  },
}
