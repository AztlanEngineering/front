const utils = require('@babel/helper-plugin-utils')

const config = {
  presets:[
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins:[
    // 'relay',
    ['module-resolver', {
      root:['./src'],
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
