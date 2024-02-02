import configureSharedConfig from './_shared.js'

export default (inputs) => {
  const {
    entry,
    resolve,
    rules,
    plugins,
    outputSSRServer: output,
  } = configureSharedConfig(inputs)
  console.log(output)

  return {
    mode   :'development',
    target :'node',
    watch  :true,
    entry,
    resolve,
    output,
    plugins:[
      plugins.Dotenv,
      plugins.Nodemon,
    ],
    module:{ rules: [rules.ts] },

  }
}
