#!/usr/bin/env node

/*
Script to build or watch files.
Supports configuration from package.json and command line arguments.
Command line arguments override package.json configuration. */

// Example package.json configuration:
// "buildConfig": {
//   "entryPoints": ["./src/**/*.{ts,tsx,js,jsx}"],
//   "ignore": ["./**/*.stories.tsx"],
//   "copyfiles": ["src/ui/*.scss", "src/ui/**/*.scss", "src/ui/**/*.css"],
//   "up": 1
// }
//
// Example command line usage:
// ./script.mjs --entryPoints "./src/**/*.{ts,tsx,js,jsx}" --ignore "./**/*.stories.tsx"
//

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import fs from 'fs'
import path from 'path'
import glob from 'resolve-glob'
import * as babel from '@babel/core'
import copyfiles from 'copyfiles'

class Builder {
  constructor() {
    this.config = {}
    this.readPackageJsonConfig()
    this.readCLIArgsConfig()
    if (!this.config.entryPoints || !this.config.format) {
      throw new Error('Configuration error: entryPoints and format are required')
    }
    this.entryPoints = glob.sync(
      this.config.entryPoints, { ignore: this.config.ignore },
    )
  }

  /**
   * Reads the build configuration from package.json.
   * @returns {Object} Configuration object.
   */
  readPackageJsonConfig() {
    try {
      const packageJsonPath = path.join(
        process.cwd(), 'package.json',
      )
      const packageJson = JSON.parse(fs.readFileSync(
        packageJsonPath, 'utf8',
      ))
      this.config = {
        ...this.config,
        ...(packageJson.buildConfig || {}),
      }
    } catch (error) {
      console.error(
        'Error reading package.json:', error,
      )
    }
  }

  /**
   * Reads the build configuration from command line arguments.
   */
  readCLIArgsConfig() {
    const { argv } = yargs(hideBin(process.argv)).options({
      entryPoints:{
        type:'array',
        // default:this.config.entryPoints,
      },
      ignore:{
        type:'array',
        // default:this.config.ignore,
      },
      format:{
        type:'string',
        // default:this.config.format,
      },
      copyfiles:{
        type:'array',
        // default:this.config.copyfiles,
      },
      up:{
        type:'number',
        // default:this.config.up,
      },
    })

    this.config = {
      ...this.config,
      ...argv,
    }
  }

  /**
   * Transforms the specified file using Babel.
   * @param {string} filename - The file to transform.
   * @returns {Object} The result object from Babel transformation.
   * @throws {Error} If the transformation fails.
   * @see https://babeljs.io/docs/en/babel-core#transformfileasync
   * @see https://babeljs.io/docs/en/babel-preset-env
   * @see https://babeljs.io/docs/en/babel-preset-react
   * @see https://babeljs.io/docs/en/babel-preset-typescript
   * @see https://babeljs.io/docs/en/babel-plugin-relay
   */
  async transformFile(filename) {
    const presetEnv = this.config.format === 'cjs' ? {
      modules:'commonjs',
      targets:'defaults',
      include:['transform-export-namespace-from'],
    } : {
      modules:false,
      targets:{
        esmodules:true,
        chrome   :'120',
      },
    }

    try {
      const result = await babel.transformFileAsync(
        filename, {
          caller:{
            name             :'@aztlan/build-tools',
            supportsStaticESM:this.config.format === 'esm',
          },
          presets:[
            [
              '@babel/preset-env',
              presetEnv,
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins:[
            [
              '@aztlan/replace-import-extension',
              {
                extMapping:{
                  '.graphql':'.graphql.js',
                  '.ts'     :this.config.format === 'cjs' ? '.cjs' : '.mjs',
                  '.tsx'    :this.config.format === 'cjs' ? '.cjs' : '.mjs',
                  '.js'     :this.config.format === 'cjs' ? '.cjs' : '.mjs',
                },
                disableDyanmicImportTransform:true,
              },
            ],
            [
              'relay',
              {
                eagerEsModules:this.config.format === 'esm',
                codegenCommand:'exit 0',
              },
            ],
          ],
        },
      )

      return result
    } catch (err) {
      console.error(
        'Error transforming file:', err,
      )
      throw err
    }
  }

  /**
   * Writes the transformed code to the specified output path.
   * @param {Object} result - The result object from Babel transformation.
   */
  async writeFile(result) {
    const outputExtension = this.config.format === 'cjs' ? '.cjs' : '.mjs'
    const extension = result.options.filename.includes('.graphql') ? '.js' : outputExtension

    const relativeFilename = path.relative(
      process.cwd(), result.options.filename,
    )
    const outputFilename = path.basename(relativeFilename).replace(
      /\.(tsx?|jsx?)$/, extension,
    )
    const outputFolder = path.join(
      'dist', this.config.format, path.dirname(relativeFilename).split('/').slice(this.config.up).join('/'),
    )
    const outputPath = path.join(
      outputFolder, outputFilename,
    )

    try {
      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(
          outputFolder, { recursive: true },
        )
      }
      fs.writeFileSync(
        outputPath, result.code,
      )
      console.log(
        'compiled:', outputPath,
      )
    } catch (err) {
      console.error(
        'Error writing file:', err,
      )
      throw err
    }
  }

  copyFiles() {
    if (this.config.copyfiles) {
      copyfiles(
        [
          ...this.config.copyfiles,
          `${process.cwd()}/dist/${this.config.format}`,
        ],
        {
          up     :this.config.up || 2,
          verbose:true,
        },
        (err) => {
          if (err) {
            console.error(
              'Error copying files:', err,
            )
            return
          }
          console.log('Files copied successfully.')
        },
      )
    }
  }

  async compileEntryPoints() {
    this.entryPoints.forEach(async (filename) => {
      const result = await this.transformFile(filename)
      await this.writeFile(result)
    })
  }

  async buildOrWatch() {
    await this.compileEntryPoints()
    this.copyFiles()
  }
}

const builder = new Builder()
builder.buildOrWatch().catch((err) => console.error(
  'Build or watch process failed:', err,
))
