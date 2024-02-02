import LoadablePlugin from '@loadable/webpack-plugin'
import configureSharedConfig from './_shared.js'

export default (inputs) => {
  const {
    // devServer,
    entry,
    optimization,
    output,
    plugins,
    resolve,
    rules,
  } = configureSharedConfig(inputs)

  return {
    mode   :'production',
    devtool:'source-map',

    entry,
    resolve,
    output,
    // devServer,

    optimization,

    plugins:[
      plugins.Copy,
      plugins.DotenvProd,
      plugins.HtmlWebpack,
      // plugins.LoadablePlugin,
      new LoadablePlugin(),
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
}
