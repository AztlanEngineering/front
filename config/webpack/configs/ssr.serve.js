import configureSharedConfig from './_shared.js'

export default (inputs) => {
  const {
    entry,
    experiments,
    externals,
    plugins,
    resolve,
    rules,
    outputSSRServer: output,
  } = configureSharedConfig(inputs)

  return {
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
}
