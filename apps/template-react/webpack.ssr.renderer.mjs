/* eslint-disable import/no-extraneous-dependencies */
import { configureSharedConfig } from '@aztlan/webpack-config'

const {
  entry,
  resolve,
  rules,
  plugins,
  outputSSRRenderer: output,
  externals,
  experiments,
} = configureSharedConfig({
  entry: 'src/ssr/renderer.ts',
  outputSSRFilename: 'ssr.js',
})

export default {
  mode: 'production',
  target: 'node18',
  entry,
  resolve,
  output,
  experiments,
  externals,
  plugins: [
    // plugins.Dotenv,
    plugins.LimitChunkCount,
  ],
  module: {
    rules: [
      rules.mdx,
      rules.ts,
      rules.scssServerSide,
      rules.scssIgnoreExceptBEM,
      rules.htmlRaw,
    ],
  },
}
