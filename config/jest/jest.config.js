/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
// const esModules = ['@storybook/addon-docs', 'yay'].join('|');
const packageInfo = require('./package.json')
const rootDir = packageInfo.name// '<rootDir>'

module.exports = {
  testEnvironment :'jsdom',
  cache           :false,

  testMatch      :[
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|stories).[mtj]s?(x)',
  ],
  moduleDirectories: [
    "../../node_modules",
    "node_modules", 
    "src", 
  ],
  // https://stackoverflow.com/questions/39418555/syntaxerror-with-jest-and-react-and-importing-css-files
  moduleNameMapper:{
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    '^.+\\.(mdx)$'         :`${rootDir}/tests/staticStub.js`,
  },
  transform:{
    '^.+\\.mdx$'    :'@storybook/addon-docs/jest-transform-mdx',
  },
  "transform": {
    },
  setupFiles :[`${rootDir}/tests/test-setup.js`],
  // transformIgnorePatterns: [`node_modules/(?!${esModules})`],
  globalSetup:`${rootDir}/tests/global-setup.js`,
}
