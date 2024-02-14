#!/usr/bin/env node
import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import ProgressPlugin from 'webpack/lib/ProgressPlugin.js'

import path from 'path'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { createRequire } from 'node:module'
import assert from 'assert'
import resolvePath from './resolvePath.js'

/* eslint-disable-next-line */
const _require = createRequire(import.meta.url)

const cwd = process.cwd()

class WebpackExecutor {
  constructor() {
    this.parseCliArguments()
    assert(
      !((this.argv.type === 'client') && !this.argv.assets),
      'Client builds require assets (pass with option -a).',
    )
  }

  parseCliArguments() {
    this.argv = yargs(hideBin(process.argv))
      .option(
        'type', {
          alias       :'t',
          describe    :'Type of config to execute',
          type        :'string',
          demandOption:true,
        },
      )
      .option(
        'command', {
          alias       :'c',
          describe    :'Command to execute',
          type        :'string',
          demandOption:true,
        },
      )
      .option(
        'entry', {
          alias       :'e',
          describe    :'Entry file',
          type        :'string',
          demandOption:true,
        },
      )
      .option(
        'quiet', {
          describe:'Reduces the output',
          type    :'boolean',
        },
      )
      .option(
        'assets', {
          alias   :'a',
          describe:'Asset directories',
          type    :'array',
          coerce  :(assetPaths) => assetPaths.map(resolvePath),
        },
      )
      .option(
        'out', {
          alias   :'o',
          describe:'Output directory. Used as a public dir in client invocations, used as a target file in the context of servers.',
          type    :'string',
          coerce  :(outDir) => path.resolve(
            cwd, outDir,
          ),
        },
      )
      .option(
        'index', {
          describe:'Index HTML path',
          type    :'string',
          coerce  :(indexHtmlPath) => path.resolve(
            cwd,
            indexHtmlPath,
          ),
        },
      )
      .option(
        'port', {
          alias   :'p',
          describe:'Port number',
          type    :'number',
        },
      )
      // Add mode development|production string, default undefined
      .option(
        'mode', {
          alias   :'m',
          describe:'Mode <development|production>',
          type    :'string',
        },
      )
      .help()
      .alias(
        'help', 'h',
      )
      .parse()
    // Required for the SSR server only
    if (this.argv.port) {
      process.env.PORT = this.argv.port.toString()
    }
  }

  async loadConfig() {
    const fullConfigName = `${this.argv.type}.${this.argv.command}.js`
    console.log(
      `Loading config: ${fullConfigName}`, this.argv,
    )
    const m = await import(`./configs/${fullConfigName}`)
    console.log(
      'module:', m,
    )
    this.baseConfig = m.default(this.argv)
    this.config = this.baseConfig
    if (this.argv.mode) {
      this.config.mode = this.argv.mode
    }
  }

  prepareCompiler() {
    this.config.entry = [
      path.resolve(
        process.cwd(), this.argv.entry,
      ),
    ]
    this.compiler = Webpack(this.config)
    if (!this.argv.quiet) {
      // console.log('Adding progress plugin')
      /* Not working atm */
      new ProgressPlugin((
        percentage, msg,
      ) => {
        console.log(
          `${percentage * 100}%`, msg,
        )
      }).apply(this.compiler)
    }
  }

  runDevServer() {
    const server = new WebpackDevServer(
      this.config.devServer,
      this.compiler,
    )
    server.start()
  }

  build() {
    const compiler = Webpack(this.config)
    compiler.run((
      err, stats,
    ) => {
      console.log(stats)
      if (err) {
        console.error(err)
        return
      }

      console.log(stats.toString({
        chunks:false, // Makes the build much quieter
        colors:true, // Shows colors in the console
      }))
    })
  }

  async execute() {
    await this.loadConfig()
    this.prepareCompiler()
    console.log(
      'EXE', this.config,
    )

    if (this.config.devServer) {
      await this.runDevServer()
    } else {
      await this.build()
    }
  }
}

new WebpackExecutor().execute()
