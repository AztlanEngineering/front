module.exports = {
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended'
    //'plugin:@typescript-eslint/recommended-type-checked',

  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    //project: './tsconfig.json' // Path to your TypeScript config file
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: [
    '!.storybook/*',
    '**/storybook-static/**',
    '**/node_modules/**',
    '**/public/**',
    '**/dist/**',
  ],
  "rules": {
   "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  }
};
/*
module.exports = {
  extends: [
    'eslint:recommended',
    //'airbnb',
    //'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:storybook/recommended',
    // 'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${__dirname}/tsconfig.json`
  },
  plugins: [
    '@typescript-eslint',
    // 'jsx-a11y',
  ],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    // graphql:'readonly',
  },
  rules: {
    '@typescript-eslint/semi': [
      2,
      'never',
    ],
  },
}*/
