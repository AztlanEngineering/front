/*
   Copyright 2021 silane

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// REF 1
const { parseSync } = require('@babel/core');

/**
 * Transforms the file extension of a given filepath based on the provided extMapping.
 * @param {string} filepath - The file path to transform.
 * @param {object} extMapping - The mapping of original to new file extensions.
 * @returns {string} The transformed filepath.
 */
function transformExtension(filepath, extMapping) {
  if(!filepath.startsWith('./') && !filepath.startsWith('../')) {
    // Package import
    return filepath;
  }

  const idx = filepath.lastIndexOf('.');
  if(idx === -1 || filepath.includes('/', idx)) {
    // No extension
    const newExt = extMapping[''];
    if(newExt) {
      return filepath + newExt;
    }
    return filepath;
  }

  for(let [origExt, newExt] of Object.entries(extMapping).sort(
    (a, b) => b[0].length - a[0].length
  )) {
    if(filepath.endsWith(origExt)) {
      return filepath.slice(0, -origExt.length) + newExt;
    }
  }
  return filepath;
}

const astTransformExtension = parseSync(
  `(${transformExtension.toString()})`,
  { babelrc: false, configFile: false }
).program.body[0].expression;

/**
 * Retrieves a specific option from the plugin's state.
 * @param {object} state - The state object of the plugin.
 * @param {string} key - The key of the option to retrieve.
 * @returns The value of the option.
 */
function getOption(state, key) {
  const opts = state.opts || {};
  return opts[key];
}

module.exports = function({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(path, state) {
        const extMapping = getOption(state, 'extMapping');
        if(!extMapping) {
          return;
        }
        const source = path.node.source;

        source.value = transformExtension(source.value, extMapping);
      },

      'ExportNamedDeclaration|ExportAllDeclaration'(path, state) {
        const extMapping = getOption(state, 'extMapping');
        if(!extMapping) {
          return;
        }
        const source = path.node.source;
        if(source == null) {
          return;
        }

        source.value = transformExtension(source.value, extMapping);
      },

      CallExpression(path, state) {
        const opts = state.opts || {};
        const extMapping = opts.extMapping;
        //const disableDynamicImportTransform = getOption(state, "disableDynamicImportTransform");
        const disableDynamicImportTransform = opts.disableDyanmicImportTransform
        const disableTransform = (
          !path.node.callee || 
          (path.node.callee.type !== 'Import') ||
          !extMapping ||
          disableDynamicImportTransform
        )

        // Check if the transform should be disabled
        if (disableTransform) {
          return;
        }

        const astExtMapping = t.objectExpression(
          Object.entries(extMapping).map(x => t.objectProperty(
            t.stringLiteral(x[0]), t.stringLiteral(x[1])
          ))
        );

        const argument = path.get('arguments.0');
        argument.replaceWith(t.callExpression(
          astTransformExtension, [argument.node, astExtMapping]
        ));
      },
    },
  };
};
