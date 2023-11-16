/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const path = require('path')
const { fileURLlToPath } = require('url')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

function getAbsolutePath(value) {
  return path.dirname(require.resolve(path.join(value, 'package.json')))
}

const isResourceBEM = (resourcePath) => resourcePath.includes('aztlan/bem') || resourcePath.includes('bem/exports')

const loaders = {
  'css-loader':{
    loader :'css-loader',
    options:{
      url    :false,
      modules:{
        // We only activate CSS modules for the file containing the BEM rules
        auto:isResourceBEM,
      },
    },
  },
}

const defaultInputs = {
  addons:[
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-storyshots',
  ],
  alias:[],
}

const template = (inputs) => ({
  staticDirs:[
    // '../../../node_modules/@aztlan/assets/images',
    // '../../../node_modules/@aztlan/assets/fonts',
    `${getAbsolutePath('@aztlan/assets')}/fonts`,
    '../src/assets',
  ],
  addons   :inputs.addons.map((addonName) => getAbsolutePath(addonName)),
  framework:{
    name   :getAbsolutePath('@storybook/react-webpack5'),
    options:{},
  },
  docs:{
    autodocs:true, // "tag",
  },
  core:{
    disableTelemetry:true, // 👈 Disables telemetry
  },
  resolve:{
    alias:inputs.alias.reduce((a, e) => {
      a[e] = getAbsolutePath(e)
      return a
    }, {}),
  },
  pushScss:(config) => config.module.rules.push({
    test   :/\.scss$/,
    include:path.resolve(__dirname, '../../..'),
    use    :[
      'style-loader',
      loaders['css-loader'],
      {
        loader :'sass-loader',
        options:{
          sassOptions:{
            includePaths:[
              // path.resolve(__dirname, "../node_modules"), // Already default
              path.resolve(__dirname, '../src'),
            ],
          },
        },
      },
    ],
  }),
  pushTsconfigPathsPlugin:(config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions:config.resolve.extensions,
        }),
      ]
    }
  },
})

const configureSharedConfig = (userInputs) => {
  const inputs = {
    dirname:(typeof __dirname === 'undefined') ? path.dirname(fileURLToPath(userInputs.location || __dirname)) : __dirname,
    ...defaultInputs,
    ...userInputs,
  }

  const config = template(inputs)

  return config
}

// console.log(config, __dirname)
/*
     config.resolve.roots = [
       path.resolve(__dirname, '../src/'),
       path.resolve(__dirname, '../src/ui'),
   path.resolve(__dirname, '../../../node_modules/@aztlan/assets/fonts'),
   path.resolve(__dirname, '../../../node_modules/@aztlan/assets/images')
 ] */

module.exports = {
  loaders,
  configureSharedConfig,
  getAbsolutePath,
}
