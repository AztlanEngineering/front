import configureSharedConfig from './_shared.js'

export default (inputs) => {
  const {
    entry,
    experiments,
    externals,
    outputSSRRenderer: output,
    resolve,
    rules,
  } = configureSharedConfig(inputs)

  return {
    mode   :'production',
    target :'node20',
    entry,
    resolve,
    output,
    // TODO document why
    experiments,
    externals,
    plugins:[],
    module :{ rules: [rules.ts] },

  }
}
