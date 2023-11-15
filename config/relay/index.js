module.exports = {
  src     :path.resolve(process.cwd(), './src'),
  schema  :path.resolve(process.cwd(), './schema.graphql'),
  excludes:[
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**',
  ],
  language:'javascript',
  // watchman:true,
}
