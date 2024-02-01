const utils = require('@babel/helper-plugin-utils')

const config = {
  presets:[
    '@aztlan/react',
  ],
  plugins:[
    'relay',
    ['formatjs', {
      ast:true,
    }],
    '@loadable/babel-plugin',
  ],
}

/*
export interface Options {
  development?: boolean;
  importSource?: string;
  runtime?: "automatic" | "classic";
}
*/

module.exports = utils.declarePreset((api, opts) =>
/*
  const {
    development,
    importSource,
    runtime,
  } = normalizeOptions(opts);
  */

  config)
