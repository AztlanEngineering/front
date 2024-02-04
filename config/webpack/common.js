import CopyPlugin from 'copy-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import NodemonPlugin from 'nodemon-webpack-plugin'
import webpack from 'webpack'
import LoadablePlugin from '@loadable/webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import nodeExternals from 'webpack-node-externals'
import path, { dirname } from 'path'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

function getAbsolutePath(value) {
  return path.dirname(require.resolve(path.join(
    value, 'package.json',
  )))
}

const defaultInputs = {
  staticFilesLocations:[
    // './src/assets/misc',
    // './src/assets/images',
    path.join(
      getAbsolutePath('@aztlan/assets'), 'fonts',
    ),
    // '../../node_modules/@aztlan/assets/images',
    // '../../node_modules/@aztlan/assets/favicons',
  ],
  resolveAlias :{}, // TODO merge with other defaults
  devServerPort:3002,
  publicDir    :'public', // relative path
}

const loaders = {
  'css-loader':{
    loader :'css-loader',
    options:{ url: false },
  },
}

const template = (inputs) => ({
  resolve:{
    extensions:[
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ],
    alias:{
      react             :getAbsolutePath('react'),
      'react-dom'       :getAbsolutePath('react-dom'),
      'react-router-dom':getAbsolutePath('react-router-dom'),
      'react-relay'     :getAbsolutePath('react-relay'),
      'react-hook-form' :getAbsolutePath('react-hook-form'),
      '.graphql'        :'.graphql.js',
      ...inputs.resolveAlias,
    },
    roots:[
      path.join(
        inputs.dirname, 'src',
      ),
    ],
    extensionAlias:{
      '.js':[
        '.ts',
        '.tsx',
        '.js',
        '.graphql',
        '.graphql.js',
      ],
    },
  },
  devServer:{
    static:[
      path.resolve(
        inputs.dirname, inputs.publicDir,
      ),
      ...inputs.staticFilesLocations.map((location) => path.resolve(
        inputs.dirname, location,
      )),
    ],
    port              :inputs.devServerPort,
    host              :'0.0.0.0',
    allowedHosts      :'all',
    historyApiFallback:true, // allows react app to be served on all routes, not only index
  },
  output:{
    path:path.resolve(
      inputs.dirname, inputs.publicDir,
    ),
    publicPath:'/',
    filename  :'[name].js?[chunkhash:5]',
  },
  // This is for the SSR executable file
  outputSSRRenderer:{
    path:path.resolve(
      inputs.dirname, 'api/',
    ),
    filename   :inputs.outputSSRFilename,
    // https://webpack.js.org/configuration/output/#librarytarget-module
    chunkFormat:'commonjs',
    library    :{ type: 'commonjs' },
  },
  // This is for the temporary SSR dev server (wrapper around the renderer)
  outputSSRServer:{
    path:path.resolve(
      inputs.dirname, 'tmp/',
    ),
    filename:inputs.outputSSRFilename,
  },

  experiments:{ outputModule: true },
  plugins    :{
    HtmlWebpack:new HtmlWebpackPlugin({ template: './src/assets/html/index.html' }),
    Dotenv     :new Dotenv({ systemvars: true }),
    DotenvProd :new Dotenv({
      path      :'./.env.prod',
      systemvars:true,
    }),
    Copy:new CopyPlugin({
      patterns:[
        ...inputs.staticFilesLocations.map((location) => ({
          from:location,
          to  :'./',
        })),
      ],
    }),
    MiniCssExtract:new MiniCssExtractPlugin(),
    BundleAnalyzer:new BundleAnalyzerPlugin({
      analyzerMode     :'static',
      generateStatsFile:true,
      openAnalyzer     :false,
    }),
    /* TODO when modular config doesnt write properly.
    Loadable:new LoadablePlugin({
    }), */
    Nodemon:new NodemonPlugin({
      watch:path.resolve(
        inputs.dirname, 'src',
      ),
      ext    :'ts,tsx,graphql',
      verbose:true,
      // nodeArgs:['--inspect'],
    }),
    LimitChunkCount:new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  },
  externals:[
    nodeExternals({
      additionalModuleDirs:[
        '.node_modules',
        '../../node_modules',
        '../../packages',
      ],
      allowlist:[
      // /^@aztlan\/ui/, // TODO be more selective to only include
      // /^@aztlan/, // TODO be more selective to only include
      ],
    }),
  ],
  optimization:{
    splitChunks:{
      // We retake here most of the default config
      // https://webpack.js.org/plugins/split-chunks-plugin/
      // We code split for all node_modules
      minSize             :15000,
      maxSize             :150000,
      minRemainingSize    :0,
      minChunks           :1,
      maxAsyncRequests    :30,
      maxInitialRequests  :30,
      enforceSizeThreshold:50000,
      hidePathInfo        :false,
      cacheGroups         :{
        vendors:{
          test  :/[\\/]node_modules[\\/]/,
          chunks:'all',
          name  :(module /* chunks, cacheGroupKey */) => {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item) => item)
            return `${moduleFileName}`
          },
        },
      },
    },
  },
  rules:{
    ts:{
      test:/\.(j|t)s(x?)$/,
      // exclude:/node_modules\/(?!react-intl|@loadable|intl-messageformat|@formatjs\/icu-messageformat-parser)/,
      use :{
        loader:'babel-loader',
        /*
        options:{
          presets:[
            ['@babel/preset-env', { modules: false }],
          ],
        }, */
      },
    },
    scssDev:{
      test:/\.(s?)css$/,
      use :[
        'style-loader',
        loaders['css-loader'],
        'sass-loader',
      ],
    },
    scssProd:{
      test:/\.(s?)css$/,
      use :[
        MiniCssExtractPlugin.loader,
        loaders['css-loader'],
        'postcss-loader',
        'sass-loader',
      ],
    },
    scssIgnore:{
      test:/\.(s?)css$/,
      use :'ignore-loader',
    },
    htmlRaw:{
      test:/\.html$/,
      use :'raw-loader',
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

export { loaders }
