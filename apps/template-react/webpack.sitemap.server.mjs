import {
  configureSharedConfig,
} from '@aztlan/webpack-config'

const {
  entry,
  resolve,
  rules,
  plugins,
  outputSSRServer: output,
} = configureSharedConfig({
  entry            :'src/sitemap/server.ts',
  outputSSRFilename:'sitemap.js',
})

export default {
  mode   :'development',
  target :'node',
  watch  :true,
  entry,
  resolve,
  output,
  plugins:[plugins.Dotenv, plugins.Nodemon],
  module :{
    rules:[rules.ts],
  },

}
