/* eslint-disable import/no-extraneous-dependencies */
import { configureSharedConfig } from '@aztlan/webpack-config'

const {
  entry,
  experiments,
  externals,
  plugins,
  resolve,
  rules,
  outputSSRServer: output,
} = configureSharedConfig({
  entry            :'src/ssr/server.ts',
  outputSSRFilename:'ssr.js',
})

export default {
  mode   :'development',
  target :'node20',
  watch  :true,
  entry,
  resolve,
  output,
  experiments,
  externals,
  plugins:[
    plugins.Dotenv,
    plugins.Nodemon,
    plugins.LimitChunkCount,
  ],
  module:{
    rules:[
      rules.ts,
      rules.mdx,
      rules.scssIgnore,
      rules.htmlRaw,
    ],
  },
}
