/* eslint-disable import/no-extraneous-dependencies */
import configureSharedConfig from './_shared.js'

export default (inputs) => {
  const {
    entry,
    resolve,
    rules,
    plugins,
    outputSSRRenderer: output,
    externals,
    experiments,
  } = configureSharedConfig(inputs)

  return {
  // mode   :'production',
    mode   :'development',
    target :'node20',
    entry,
    resolve,
    output,
    experiments,
    externals,
    plugins:[
      plugins.Dotenv,
      plugins.LimitChunkCount,
    ],
    module:{
      rules:[
        rules.mdx,
        rules.ts,
        rules.scssIgnore,
        rules.htmlRaw,
      ],
    },
  }
}
