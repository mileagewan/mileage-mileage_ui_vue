module.exports = {
  lintOnSave: process.env.NODE_ENV === 'production',

  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('raw-loade')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
  }
}