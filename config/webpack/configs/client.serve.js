import configureSharedConfig from './_shared.js'

export default (inputs) => {
  const {
    devServer,
    output,
    plugins,
    resolve,
    rules,
  } = configureSharedConfig(inputs)

  return {
    mode   :'development',
    devtool:'source-map',

    resolve,
    output,
    devServer,

    plugins:[
    // plugins.ResolveTypeScript,
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
}
