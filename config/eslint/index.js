module.exports = {
  extends       :['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'plugin:storybook/recommended'],
  parser        :'@typescript-eslint/parser',
  plugins       :['@typescript-eslint'],
  root          :true,
  ignorePatterns:['!.storybook/*'],
  env           :{
    browser:true,
    node   :true,
  },
  globals:{
    graphql:'readonly',
  },
  overrides:[
    {
      files  :['*.graphql'],
      parser :'@graphql-eslint/eslint-plugin',
      plugins:['@graphql-eslint'],
      rules  :{
        '@graphql-eslint/known-type-names':'error',
      },
      parserOptions:{
        schema:'./schema.graphql',
      },
    },
  ],
  rules:{
    semi:[
      2,
      'never',
    ],
    'key-spacing':[
      'error', {
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
  },
}
