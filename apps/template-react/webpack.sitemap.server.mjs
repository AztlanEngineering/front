import path from 'path'
import { configureSharedConfig } from '@aztlan/webpack-config'

const {
  resolve,
  rules,
  plugins,
  outputServer: output,
} = configureSharedConfig({
  outputSSRFilename: 'sitemap.js',
})

export default {
  mode: 'development',
  target: 'node',
  watch: true,
  entry: [
    path.resolve(process.cwd(), 'src/sitemap/server.ts'),
  ],
  resolve,
  output,
  plugins: [
    plugins.Dotenv,
    plugins.Nodemon,
  ],
  module: {
    rules: [
      rules.jsx,
    ],
  },

}
