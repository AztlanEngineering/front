import path from 'path'
import { configureSharedConfig } from '@aztlan/webpack-config'

const {
  experiments,
  externals,
  outputSSR: output,
  resolve,
  rules,
} = configureSharedConfig({
  outputSSRFilename: 'sitemap.js',
})

export default {
  mode: 'production',
  target: 'node18',
  entry: [
    path.resolve(process.cwd(), 'src/sitemap/renderer.js'),
  ],
  resolve,
  output,
  // TODO document why
  experiments,
  externals,
  plugins: [],
  module: {
    rules: [
      rules.ts,
    ],
  },
}
