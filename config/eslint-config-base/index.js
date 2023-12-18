const ignorePatterns = [
  '!.storybook/*',
  '**/storybook-static/**',
  '**/node_modules/**',
  '**/public/**',
  '**/dist/**',
  '**/api/**',
]

const sharedRules = {
  'import/extensions':[
    'error',
    'always',
    {
      ignorePackages:true,
    },
  ],
  '@stylistic/array-element-newline':[
    'error',
    {
      multiline:true,
      minItems :3,
    },
  ],
  '@stylistic/array-bracket-newline':[
    'error',
    {
      multiline:true,
      minItems :3,
    },
  ],
  'react/jsx-props-no-spreading':[0],
  // TODO fix
  'function-paren-newline'      :[
    'error',
    {
      minItems:2,
    },
  ],
  '@stylistic/function-paren-newline':[
    'error',
    {
      minItems:2,
    },
  ],
  // TODO looks like the linting works alright, but the fixing is conservative
  // 'object-property-newline'           :['error', { allowAllPropertiesOnSameLine: false }],
  '@stylistic/object-property-newline':[
    'error',
    {
      allowAllPropertiesOnSameLine:false,
    },
  ],
  '@stylistic/object-curly-newline':[
    'error',
    {
      multiline    :true,
      minProperties:1,
    },
  ],
  'key-spacing':[
    'error',
    {
      multiLine:{
        beforeColon:false,
        afterColon :false,
      },
      align:{
        beforeColon:false,
        afterColon :false,
        on         :'colon',
      },
    },
  ],
}

module.exports = {
  // These are the two rules that cannot be overriden
  root:true,
  ignorePatterns,

  // Main modular config
  extends:[
    'eslint:recommended',
    'airbnb',
    'plugin:storybook/recommended',
  ],
  parser:'@typescript-eslint/parser',
  env   :{
    browser:true,
    node   :true,
  },
  plugins  :['@stylistic'],
  overrides:[
    {
      files  :['*.ts', '*.tsx'], // Apply these settings only to TypeScript files
      extends:[
        'airbnb-typescript',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-type-checked',
      ],
      // plugins: ['@typescript-eslint'], // Already provided by airbnb
      parserOptions:{
        ecmaVersion    :2020,
        sourceType     :'module',
        project        :'./tsconfig.json', // Path to your TypeScript config file
        tsconfigRootDir:process.cwd(),
      },
      rules:{
        '@typescript-eslint/semi':[2, 'never'],
        ...sharedRules,
      },
    },
  ],
  rules:{
    semi:['error', 'never'],
    ...sharedRules,
  },
}
/*
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    // 'jsx-a11y',
  ],
  globals: {
    // graphql:'readonly',
  },
  rules: {
  },
} */
