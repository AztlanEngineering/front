/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
// const esModules = ['@storybook/addon-docs', 'yay'].join('|');

module.exports = {
  testEnvironment :'jsdom',
  cache           :false,
  // https://stackoverflow.com/questions/39418555/syntaxerror-with-jest-and-react-and-importing-css-files
  moduleNameMapper:{
    '^.+\\.(css|scss)$'    :'<rootDir>/tests/staticStub.js',
    '^.+\\.(mdx)$'         :'<rootDir>/tests/staticStub.js',
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^@aztlan/bem$'        :'identity-obj-proxy',
    '^@aztlan/bem/exports$':'identity-obj-proxy',
  },
  transform:{
    // '^.+\\.[tj]sx?$':'babel-jest',
    '//^.+\\.mdx$':'@storybook/addon-docs/jest-transform-mdx',
  },
  setupFiles :['@aztlan/jest-config/itests/test-setup.js'],
  // transformIgnorePatterns: [`node_modules/(?!${esModules})`],
  globalSetup:'<rootDir>/tests/global-setup.js',
}
