import path, { dirname } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import CopyPlugin from 'copy-webpack-plugin'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const defaultInputs = {
  staticFilesLocations:[
    './src/assets/misc',
    './src/assets/images',
    '../../node_modules/@aztlan/assets/fonts',
    '../../node_modules/@aztlan/assets/images',
    '../../node_modules/@aztlan/assets/favicons',
  ],
  resolveAlias :{}, // TODO merge with other defaults
  devServerPort:3002,
  publicDir    :'public', // relative path
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

const template = (inputs) => ({
  resolve:{
    extensions:['.ts', '.tsx', '.js', '.jsx'],
    alias     :{
      react             :path.resolve('../../node_modules/react'),
      'react-dom'       :path.resolve('../../node_modules/react-dom'),
      'react-router-dom':path.resolve('../../node_modules/react-router-dom'),
      ...inputs.resolveAlias,
    },
  },
  devServer:{
    static:[
      path.resolve(__dirname, inputs.publicDir),
      ...inputs.staticFilesLocations.map((location) => path.resolve(__dirname, location)),
    ],
    port              :inputs.devServerPort,
    host              :'0.0.0.0',
    allowedHosts      :'all',
    historyApiFallback:true, // allows react app to be served on all routes, not only index
  },
  entry:[
    './src/client.tsx',
  ],
  output:{
    path      :path.resolve(__dirname, inputs.publicDir),
    publicPath:'/',
    filename  :'[name].js?[chunkhash:5]',
  },
  plugins:{
    HtmlWebpack:new HtmlWebpackPlugin({
      template:'./src/assets/html/index.html',
    }),
    Dotenv:new Dotenv({
      systemvars:true,
    }),
    Copy:new CopyPlugin({
      patterns:[
        ...inputs.staticFilesLocations.map((location) => ({ from: location, to: './' })),
      ],
    }),
  },
  rules:{
    ts:{
      test   :/\.(j|t)s(x?)$/,
      exclude:/node_modules/,
      use    :'ts-loader',
    },
    scssDev:{
      test:/\.(s?)css$/,
      use :[
        'style-loader',
        loaders['css-loader'],
        'sass-loader',
      ],
    },
  },
})

const configureSharedConfig = (userInputs) => {
  const inputs = {
    ...defaultInputs,
    ...userInputs,
  }

  const config = template(inputs)

  return config
}

export { configureSharedConfig }
