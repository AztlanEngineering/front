const path = require('path')
const fs = require('fs')

module.exports = {
  extends: [
    '@aztlan/base',
    'plugin:relay/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['relay', 'graphql'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    // graphql:'readonly',
  },
  rules: {
    /*
    'graphql/template-strings':[2, {
      // Import default settings for your GraphQL client. Supported values:
      // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
      env:'relay',

      // Import your schema JSON here
      // schemaJson: require(`${process.cwd}/schema.graphql`),

      // OR provide the schema in the Schema Language format
      schemaString:fs.readFileSync(path.resolve(process.cwd(), './schema.graphql'), { encoding: 'utf8', flag: 'r' }),

      tagName:'graphql',
      // tagName is set for you to Relay.QL
    }],
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
    */
  },
}
