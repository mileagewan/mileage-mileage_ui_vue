module.exports = {
  lintOnSave: process.env.NODE_ENV === 'production',

  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production' ?  '/mileage-mileage_ui_vue/dist/' : '/',
  chainWebpack: config => {
    config.module
      .rule('raw-loade')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
  }
}