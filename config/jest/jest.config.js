/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
// const esModules = ['@storybook/addon-docs', 'yay'].join('|');
const packageInfo = require('./package.json')

const rootDir = packageInfo.name// '<rootDir>'

module.exports = {
  cache          :false,
  testEnvironment:'jsdom',
  transform      :{
    '^.+\\.ts?$':'ts-jest',
    // '^.+\\.mdx$'    :'@storybook/addon-docs/jest-transform-mdx',
  },

  // Otherwise we get errors trying to execute Storybook code
  transformIgnorePatterns:['<rootDir>/node_modules/'],

  moduleDirectories:[
    '../../node_modules',
    'node_modules',
    // Otherwise we get an error not managing to locate 'src/ui' as 'ui'
    './src',
  ],
  // Otherwise we get an error not managing to import scss files.
  // https://stackoverflow.com/questions/39418555/syntaxerror-with-jest-and-react-and-importing-css-files
  moduleNameMapper:{
    '^.+\\.(css|scss)$':`${rootDir}/tests/staticStub.js`,
    '^.+\\.(mdx)$'     :`${rootDir}/tests/staticStub.js`,
    // '^.+\\.(css|less|scss|sass)$':'identity-obj-proxy',
  },

  /*
  moduleNameMapper:{
    "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
    '^.+\\.(mdx)$'         :`${rootDir}/tests/staticStub.js`,
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx','.jsx', '.mdx'],
  roots:[`${rootDir}/src`, rootDir],
  setupFiles :[`${rootDir}/tests/test-setup.js`],
  // transformIgnorePatterns: [`node_modules/(?!${esModules})`],
  globalSetup:`${rootDir}/tests/global-setup.js`, */
}
