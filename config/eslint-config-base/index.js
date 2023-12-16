module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:storybook/recommended',
    // 'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
  ],
  ignorePatterns: [
    '!.storybook/*',
    '**/node_modules/**',
    '**/public/**',
  ],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    // graphql:'readonly',
  },
  rules: {
    semi: [
      2,
      'never',
    ],
  },
}
