import esbuild from 'esbuild'
import babel from 'esbuild-plugin-babel'
import CssModulesPlugin from 'esbuild-css-modules-plugin'
import fs from 'fs'

const removeScssImportsPlugin = {
  name:'remove-scss-imports',
  setup(build) {
    build.onLoad(
      { filter: /\.tsx?$/ }, async (args) => {
      // Read the file content
        let contents = await fs.promises.readFile(
          args.path, 'utf8',
        )

        // Regular expression to match both static and dynamic SCSS import statements
        const scssImportRegex = /import.*?['"]\.\/.*?\.scss['"].*;?|import\(['"]\.\/.*?\.scss['"]\).*/g

        const found = contents.match(scssImportRegex)

        const bemr = /import(\s+\*\s+as\s+\w+|\s+[\w{},\s]+)?\s+from\s+['"]@aztlan\/bem['"]|import\(['"]@aztlan\/bem['"]\)/

        const bem = contents.match(bemr)

        console.log(
          'found', found,
        )

        console.log(
          'bem', bem,
        )

        // Remove SCSS import statements
        contents = contents.replace(
          scssImportRegex, '',
        )

        // contents = contents.replace(
        //  bemr, '',
        // )

        return {
          contents,
          loader:'tsx',
        }
      },
    )
  },
}

esbuild
  .build({
    entryPoints:['src/ssr/renderer.ts'],
    bundle     :true,
    outfile    :'main.cjs',
    target     :'esnext',
    logLevel   :'debug',
    platform   :'node',
    format     :'cjs',
    packages   :'external',
    // external   :['*.scss'],
    plugins    :[
      removeScssImportsPlugin,
      babel({ filter: /\.(ts|tsx)$/ }),
    ],
    loader:{ '.html': 'text' },
  })
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
