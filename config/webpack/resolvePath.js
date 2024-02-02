import path from 'path'
import fs from 'fs'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

/**
 * Resolves the full path of a given filename or directory, distinguishing between local and npm modules.
 * It handles non-JavaScript files and directories within npm modules by locating
 * the module's package.json directory.
 *
 * @param {string} filename - The filename, directory, or module path to resolve.
 * @returns {Promise<string>} The full resolved path of the file, directory, or module.
 */
export default (filename) => {
  if (filename.startsWith('./') || filename.startsWith('../') || path.isAbsolute(filename)) {
    const fullPath = path.resolve(
      process.cwd(), filename,
    )
    if (fs.existsSync(fullPath)) {
      return fullPath
    }
    throw new Error(`Local file or directory "${filename}" does not exist.`)
  } else {
    try {
      const moduleName = filename.split('/')[0].startsWith('@') ? filename.split('/').slice(
        0, 2,
      ).join('/') : filename.split('/')[0]
      const subPath = filename.slice(moduleName.length)

      const packagePath = require.resolve(`${moduleName}/package.json`)
      const packageDir = path.dirname(packagePath)
      const fullPath = path.join(
        packageDir, subPath,
      )

      if (fs.existsSync(fullPath)) {
        return fullPath
      }
      throw new Error(`Module file or directory "${filename}" does not exist.`)
    } catch (error) {
      throw new Error(`Error resolving "${filename}": ${error.message}`)
    }
  }
}
