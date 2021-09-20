module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Resume'
        return args
      })
  },
  transpileDependencies: [
    'vuetify'
  ]
}
