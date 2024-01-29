export default function (api) {
  if (api) {
    api.cache(true)
    api.debug = process.env.NODE_ENV === 'development' || false
  }

  const presets = ['@aztlan/react']
  const plugins = [
    'relay',
    [
      'formatjs',
      {
        ast:true,
        // overrideIdFn: (string, m, d) => string,
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}
