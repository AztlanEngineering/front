/* eslint-disable no-underscore-dangle -- part of yeoman's api */
/* eslint-disable @typescript-eslint/no-var-requires -- to keep it a cjs file */

const Generator = require('yeoman-generator')
// Const chalk = require("chalk");
// const yosay = require("yosay");
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const pjson = require('../../package.json')

const { version } = pjson
const pkg = pjson.name

function pascalToSnake(s) {
  return s
    .replace(
      /(?:^|\.?)([A-Z])/g, (
        x, y,
      ) => `-${y.toLowerCase()}`,
    )
    .replace(
      /^-/, '',
    )
}

module.exports = class extends Generator {
  constructor(
    args, opts,
  ) {
    super(
      args, opts,
    )

    this.argument(
      'type', {
        type    :String,
        required:true,
        desc    :'<story|comp|component|page|module>',
      },
    )
    this.argument(
      'fullname', {
        type    :String,
        required:true,
        desc    :'The name of the component or page for which we generate code for.',
      },
    )

    this.option(
      'diet', {
        type :Boolean,
        alias:'d',
        desc :'[type=comp|component] Whether this component is on a diet (no prop-types)',
      },
    )

    this.option(
      'nostyles', {
        type:Boolean,
        // Alias: "",
        desc:'[type=comp|component] Whether to generate a component without css',
      },
    )

    this.option(
      'stories', {
        type :Boolean,
        alias:'s',
        desc :'Whether to generate stories for the component. Only applies if type=comp|component',
      },
    )

    this.option(
      'npmOrg', {
        type   :String,
        alias  :'o',
        desc   :'The npm org namespace to use for dependencies. ',
        default:'aztlan',
      },
    )

    console.log(
      'Generator called with options:',
      `type:${this.options.type}`,
      `fullname:${this.options.fullname}`,
      `diet:${this.options.diet}`,
      `nostyles:${this.options.nostyles}`,
      `npmOrg:${this.options.npmOrg}`,
    )
  }

  writing() {
    const {
      fullname,
      type: generateType,
      diet: optionDiet,
      nostyles: optionNoStyles,
      npmOrg,
    } = this.options

    const splitName = fullname.split(/[|/]+/)
    const name = splitName[splitName.length - 1]
    const lower = pascalToSnake(name)

    const templateVars = {
      version,
      pkg,
      fullname,
      name,
      lower,
      optionDiet,
      optionNoStyles,
      npmOrg,
    }

    if ([
      'comp',
      'component',
    ].includes(generateType)) {
      this._generateComponent(templateVars)
    }

    if (generateType === 'story') {
      this._generateStory(templateVars)
    }

    if (generateType === 'page') {
      this._generatePage(templateVars)
    }

    if (generateType === 'module') {
      this._generateModule(templateVars)
    }
  }

  _touchFile(relativeFilePath) {
    this.log(
      'TOUCH : ', relativeFilePath,
    )

    const fullPath = path.resolve(path.join(
      process.cwd(), relativeFilePath,
    ))
    fs.closeSync(fs.openSync(
      fullPath, 'w',
    ))
  }

  _touchOrAppendToIndex(toAppend) {
    const localIndex = 'index.ts'
    const localIndexExists = () => this.fs.exists(localIndex)
    const fullPathLocalIndex = path.resolve(path.join(
      process.cwd(), localIndex,
    ))

    if (!localIndexExists()) {
      // This.fs.write(localIndex, '')
      this._touchFile(localIndex)
    }

    fs.appendFileSync(
      fullPathLocalIndex, toAppend,
    )
    this.log(`updated \x1b[36m\x1b[1m ${localIndex} \x1b[0m`)
  }

  _generateStory(templateVars) {
    this.log(`Will generate stories for : ${templateVars.fullname}`)
    this.fs.copyTpl(
      this.templatePath('story/Story.ts'),
      this.destinationPath(`${templateVars.name}.stories.tsx`),
      templateVars,
    )
  }

  _generateComponent(templateVars) {
    this.log(`Will generate the component ${templateVars.fullname}`)

    const stringToAppendToIndex = `export * from './${templateVars.name}/index.js'\n`
    this._touchOrAppendToIndex(stringToAppendToIndex)

    const targetFolder = `./${templateVars.name}/`
    mkdirp.sync(targetFolder)
    this.destinationRoot(targetFolder)
    this.log(`Created folder\x1b[35m\x1b[1m ${targetFolder} \x1b[0m`)

    this.fs.copyTpl(
      this.templatePath('component/Component.ts'),
      this.destinationPath(`${templateVars.name}.tsx`),
      templateVars,
    )

    if (templateVars.stories) {
      this.fs.copyTpl(
        this.templatePath('story/Story.ts'),
        this.destinationPath(`${templateVars.name}.stories.tsx`),
        templateVars,
      )
    }

    this.fs.copyTpl(
      this.templatePath('component/index.ts'),
      this.destinationPath('index.ts'),
      templateVars,
    )

    if (!templateVars.optionNoStyles) {
      this.fs.copyTpl(
        this.templatePath('component/styles.scss'),
        this.destinationPath('styles.scss'),
        templateVars,
      )
    }
  }

  _generatePage(templateVars) {
    this.log(`Will generate the page ${templateVars.fullname}`)

    // const stringToAppendToIndex = `export { default as ${templateVars.name} } from './${templateVars.name}'\n`
    // this._touchOrAppendToIndex(stringToAppendToIndex)

    this.fs.copyTpl(
      this.templatePath('page/Page.ts'),
      this.destinationPath(`${templateVars.name}.tsx`),
      templateVars,
    )
  }

  _generateModule(templateVars) {
    this.log(`Will generate the module ${templateVars.fullname}`)

    const targetFolder = `./${templateVars.name}/`
    mkdirp.sync(targetFolder)
    this.destinationRoot(targetFolder)
    this.log(`Created folder\x1b[35m\x1b[1m ${targetFolder} \x1b[0m`)

    this.fs.copyTpl(
      this.templatePath('module/urls.ts'),
      this.destinationPath('urls.ts'),
      templateVars,
    )

    this.fs.copyTpl(
      this.templatePath('module/routes.ts'),
      this.destinationPath('routes.ts'),
      templateVars,
    )

    mkdirp.sync('components')
    this._touchFile('components/index.ts')

    mkdirp.sync('pages')
    this._touchFile('pages/index.ts')

    this.log('!!! DO NOT FORGET !!!')
    this.log('1) Add module routes to app/routes.ts')
    this.log('2) Add module url exports to app/urls.ts')
  }
}
