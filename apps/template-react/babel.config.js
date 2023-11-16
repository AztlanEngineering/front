module.exports = function (api) {     ■
  api.cache(true)            
  const presets = [          
    '@aztlan/react',     
  ]                          
  const plugins = [          
    'relay',                 
  ]                          
                             
  return {                   
    presets,                 
    plugins,                 
  }                          
}                            
