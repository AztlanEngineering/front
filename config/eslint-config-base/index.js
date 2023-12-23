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
    { ignorePackages: true },
  ],
  'react/jsx-props-no-spreading':[0],
  'react/jsx-max-props-per-line':[
    'error',
    { maximum: 1 },
  ],
  // TODO fix
  '@stylistic/array-element-newline':[
    'error',
    {
      multiline:true,
      minItems :2,
    },
  ],
  '@stylistic/array-bracket-newline':[
    'error',
    {
      multiline:true,
      minItems :2,
    },
  ],
  'function-paren-newline':[
    'error',
    { minItems: 2 },
  ],
  '@stylistic/function-paren-newline':[
    'error',
    { minItems: 2 },
  ],
  // TODO looks like the linting works alright, but the fixing is conservative
  // 'object-property-newline'           :['error', { allowAllPropertiesOnSameLine: false }],
  '@stylistic/object-property-newline':[
    'error',
    { allowAllPropertiesOnSameLine: false },
  ],
  'object-curly-newline'           :'off',
  '@stylistic/object-curly-newline':[
    'error',
    {
      ObjectExpression:{
        multiline    :true,
        minProperties:2,
      },
      ObjectPattern:{
        multiline    :true,
        minProperties:2,
      },
      ImportDeclaration:{
        multiline    :true,
        minProperties:2,
      },
      ExportDeclaration:{
        multiline    :true,
        minProperties:2,
      },
    },
  ],
  'no-multi-spaces'           :'off',
  // Find proper rules here
  // https://astexplorer.net/
  '@stylistic/no-multi-spaces':[
    'error',
    { exceptions: { TSPropertySignature: true } },
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
      files:[
        '*.ts',
        '*.tsx',
      ], // Apply these settings only to TypeScript files
      extends:[
        'airbnb-typescript',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-type-checked',
      ],
      // plugins: ['@typescript-eslint'], // Already provided by airbnb
      parserOptions:{
        ecmaVersion    :2020,
        sourceType     :'module',
        project        :true, // Path to your TypeScript config file
        tsconfigRootDir:process.cwd(),
      },
      rules:{
        '@typescript-eslint/semi':[
          2,
          'never',
        ],
        'key-spacing'                   :'off',
        '@typescript-eslint/key-spacing':[
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
        ...sharedRules,
      },
    },
  ],
  rules:{
    semi:[
      'error',
      'never',
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
