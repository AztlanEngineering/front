module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ['!.storybook/*'],
  env:{
    browser:true,
    node   :true,
  },
  extends  :['airbnb'],
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
  }
}
