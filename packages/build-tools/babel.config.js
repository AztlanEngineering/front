// Needs a bit of cleanup
//

module.exports = function (api) {
  // var isProd = api.cache(() => process.env.NODE_ENV === 'production')
  const isCjs = api.cache(() => process.env.TARGET === 'cjs')
  const isEs = api.cache(() => process.env.TARGET === 'es')

  let modules; let targets; let
    moduleResolverRoots

  // If we are compiling for common JS
  if (isCjs) {
    modules = 'commonjs'
    targets = 'defaults'
    moduleResolverRoots = ['./src']
  }

  // If we are compiling for ES
  else if (isEs) {
    modules = false
    targets = { chrome: '111' }
    moduleResolverRoots = ['./src']
  }

  // If we are simply running the storybook
  else {
    targets = { chrome: '100' }
    moduleResolverRoots = ['./src', './']
  }

  const presets = [
    [
      '@babel/preset-env',
      {
        modules,
        targets,
        // debug:true,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ]

  const plugins = [
    'relay',
    ['module-resolver', {
      root: moduleResolverRoots,
    }],
  ]

  return {
    presets,
    plugins,
  }
}
