/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
// const esModules = ['@storybook/addon-docs', 'yay'].join('|');
const packageInfo = require('./package.json')
const rootDir = packageInfo.name// '<rootDir>'

module.exports = {
  cache           :false,
  testEnvironment:'jsdom',
  transform      :{
    '^.+\\.ts?$':'ts-jest',
  },
  
  moduleDirectories      :[
    '../../node_modules',
    'node_modules',
    // Otherwise we get an error not managing to locate 'src/ui' as 'ui'
    './src',
  ],
  // Otherwise we get an error not managing to import scss files.
  moduleNameMapper       :{
    '^.+\\.(css|less|scss|sass)$':'identity-obj-proxy',
  },

  /*
  moduleDirectories: [
    "../../node_modules",
    "node_modules", 
    "./src", 
  ],
  // https://stackoverflow.com/questions/39418555/syntaxerror-with-jest-and-react-and-importing-css-files
  moduleNameMapper:{
    "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
    '^.+\\.(mdx)$'         :`${rootDir}/tests/staticStub.js`,
  },
  transform:{
    transform: {
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'ts-jest',
    },
    '^.+\\.mdx$'    :'@storybook/addon-docs/jest-transform-mdx',

  },
    extensionsToTreatAsEsm: ['.ts', '.tsx','.jsx', '.mdx'],
  "transform": {
    },
  roots:[`${rootDir}/src`, rootDir],
  setupFiles :[`${rootDir}/tests/test-setup.js`],
  // transformIgnorePatterns: [`node_modules/(?!${esModules})`],
  globalSetup:`${rootDir}/tests/global-setup.js`,*/
}
