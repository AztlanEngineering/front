import { configureSharedConfig } from '@aztlan/webpack-config'

/*
const staticFilesLocations = [
  './src/assets/misc',
  './src/assets/images',
  '../../node_modules/@aztlan/assets/fonts',
  '../../node_modules/@aztlan/assets/images',
  '../../node_modules/@aztlan/assets/favicons',
] */

const {
  devServer,
  entry,
  optimization,
  output,
  plugins,
  resolve,
  rules,
} = configureSharedConfig()

export default {
  mode   :'production',
  devtool:'source-map',

  entry,
  resolve,
  output,
  devServer,

  optimization,

  plugins:[
    plugins.Copy,
    plugins.Dotenv,
    plugins.HtmlWebpack,
    // plugins.LoadablePlugin,
    plugins.MiniCssExtract,
    plugins.BundleAnalyzer,
  ],

  module:{
    rules:[
      rules.ts,
      rules.scssProd,
    ],
  },

}
