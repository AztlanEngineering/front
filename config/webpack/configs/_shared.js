import path from 'path'
import NodeExternals from 'webpack-node-externals'
import CopyPlugin from 'copy-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import NodemonPlugin from 'nodemon-webpack-plugin'
import webpack from 'webpack'
import LoadablePlugin from '@loadable/webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import nodeExternals from 'webpack-node-externals'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { createRequire } from 'node:module'

/* eslint-disable-next-line */
const _require = createRequire(import.meta.url)

function getAbsolutePath(value) {
  return path.dirname(_require.resolve(path.join(
    value, 'package.json',
  )))
}

function NothingPlugin() {
  this.apply = function () {}
}

const cwd = process.cwd()

const defaults = {
  out          :'public',
  indexHtmlPath:'src/assets/html/index.html',
}

export default (inputs) => ({
  resolve:{
    extensions:[
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ],
    alias:{
      react               :getAbsolutePath('react'),
      'react-dom'         :getAbsolutePath('react-dom'),
      'react-router-dom'  :getAbsolutePath('react-router-dom'),
      'react-relay'       :getAbsolutePath('react-relay'),
      'react-hook-form'   :getAbsolutePath('react-hook-form'),
      'react-intl'        :getAbsolutePath('react-intl'),
      'react-helmet-async':getAbsolutePath('react-helmet-async'),
    },
    roots:[
      path.resolve(
        cwd, 'src',
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
        cwd, defaults.out,
      ),
      ...(inputs.assets || []).map((location) => path.resolve(
        cwd, location,
      )),
    ],
    port              :process.env.PORT || 3002,
    host              :'0.0.0.0',
    allowedHosts      :'all',
    // historyApiFallback:true, // allows react app to be served on all routes, not only index
    historyApiFallback:{ disableDotRule: true },
  },
  output:{
    path:path.resolve(
      cwd, inputs.out || defaults.out,
    ),
    publicPath:'/',
    filename  :'[name].js?[chunkhash:5]',
  },
  outputSSRRenderer:{
    path:path.resolve(
      cwd, path.dirname(inputs.out || defaults.out),
    ),
    filename   :path.basename(inputs.out || defaults.out),
    // https://webpack.js.org/configuration/output/#librarytarget-module
    chunkFormat:'commonjs',
    library    :{ type: 'commonjs' },
  },
  // This is for the temporary SSR dev server (wrapper around the renderer)
  outputSSRServer:{
    path:path.resolve(
      cwd, path.dirname(inputs.out || defaults.out),
    ),
    filename:path.basename(inputs.out || defaults.out),
  },
  experiments :{ outputModule: true },
  optimization:{
    splitChunks:{
      chunks                :'all',
      minSize               :20000,
      maxSize               :60000,
      minChunks             :1,
      maxAsyncRequests      :15,
      maxInitialRequests    :24,
      automaticNameDelimiter:'~',
      cacheGroups           :{
        defaultVendors:{
          test              :/[\\/]node_modules[\\/]/,
          priority          :-10,
          reuseExistingChunk:true,
          name(module) {
            const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)
            // TODO Investigate why suddenly the package name is not being extracted on some packages,
            // (with module.context === null)
            const packageName = match ? match[1] : 'pkg'
            return `vendor.${packageName.replace(
              '@', '',
            )}`
          },
        },
        default:{
          minChunks         :1,
          priority          :-20,
          reuseExistingChunk:true,
        },
        jsonFiles:{
          test    :/\.json$/,
          type    :'json',
          priority:10,
          name(module) {
            // Keeping the original name for JSON files
            const moduleName = module.identifier()
            const baseName = moduleName.split('/').reverse()[0]
            return baseName.replace(
              '.json', '',
            )
          },
          chunks :'all',
          enforce:true,
        },
      },
    },
  },

  /*
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
          name  :(module /* chunks, cacheGroupKey ) => {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item) => item)
            return `${moduleFileName}`
          },
        },
      },
    },
}, */
  externals:[
    NodeExternals({
      additionalModuleDirs:[
        path.resolve(
          cwd, 'node_modules',
        ),
        path.resolve(
          cwd, '../../node_modules',
        ),
        path.resolve(
          cwd, '../../packages',
        ),
      ],
      allowlist:[], // /^@aztlan\/ui/,
    }),
  ],
  plugins:{
    HtmlWebpack:new HtmlWebpackPlugin({
      template:path.resolve(
        cwd, inputs.indexHtmlPath || defaults.indexHtmlPath,
      ),
    }),
    Dotenv    :new Dotenv({ systemvars: true }),
    DotenvProd:new Dotenv({
      path:path.resolve(
        cwd, '.env.prod',
      ),
      systemvars:true,
    }),
    Copy:inputs.assets ? new CopyPlugin({
      patterns:[
        ...(inputs.assets || []).map((location) => ({
          from:location,
          to  :'./',
        })),
      ],
    }) : new NothingPlugin(),
    MiniCssExtract:new MiniCssExtractPlugin(),
    BundleAnalyzer:new BundleAnalyzerPlugin({
      analyzerMode     :'static',
      generateStatsFile:true,
      // Worth to be noted it also works on node calls
      openAnalyzer     :false,
    }),
    /* TODO when modular config doesnt write properly.
    Loadable:new LoadablePlugin({
    }), */
    Nodemon:new NodemonPlugin({
      watch:path.resolve(
        cwd, 'src',
      ),
      ext    :'ts,tsx,graphql',
      verbose:true,
      // args   :[`-p ${process.env.PORT}`],
      // nodeArgs:['--inspect'],
    }),
    LimitChunkCount:new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  },
  rules:{
    ts:{
      test:/\.(j|t)s(x?)$/,
      /* eslint-disable-next-line */
      // exclude:/node_modules\/(?!react-intl|@loadable|intl-messageformat|@formatjs\/icu-messageformat-parser)/,
      use :{
        loader :'babel-loader',
        options:{
          presets:[
            [
              '@babel/preset-env',
              { modules: false },
            ],
          ],
          sourceMaps:true,
        },
      },
    },
    scssDev:{
      test:/\.(s?)css$/,
      use :[
        'style-loader',
        {
          loader :'css-loader',
          options:{ url: false },
        },
        'sass-loader',
      ],
    },
    scssProd:{
      test:/\.(s?)css$/,
      use :[
        MiniCssExtractPlugin.loader,
        {
          loader :'css-loader',
          options:{ url: false },
        },
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
