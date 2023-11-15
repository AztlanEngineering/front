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
  output,
  plugins,
  resolve,
  rules,
} = configureSharedConfig()

export default {
  mode   :'development',
  devtool:'source-map',

  entry,
  resolve,
  output,
  devServer,

  plugins:[
    plugins.Dotenv,
    plugins.HtmlWebpack,
  ],

  module:{
    rules:[
      rules.ts,
      rules.scssDev,
    ],
  },

}
