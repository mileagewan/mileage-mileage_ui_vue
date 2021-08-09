const gulp = require('gulp')
const config = require('@vue/cli-service/webpack.config')
const del = require('del')
const less = require('gulp-less')
const webpack = require('webpack-stream')
const path = require('path')

gulp.task('webpack', async (done) => {
  const cfg = Object.assign({}, config, {
    entry: {
      button: './src/packages/button/index.js',
      'wlc.common': './src/packages/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: '[name].js',
      chunkFilename: '[id].js',
      libraryTarget: 'commonjs2'
    },
    optimization: {
      minimize: false,
    },
  })
  console.log(cfg)
  gulp.src('./src/packages/index.js')
    .pipe(webpack(cfg))
    .pipe(gulp.dest('./lib'))
  done()
})


gulp.task('css', (done) => {
  gulp.src('./src/packages/theme/*.less')
    .pipe(less())
    .pipe(gulp.dest('./src/packages/theme/lib'))
  done()
})
gulp.task('copy_css', (done) => {
  gulp.src('./src/packages/theme/lib/*')
    .pipe(gulp.dest('./lib/theme/'))
  done()
})

gulp.task('clean', async (done) => {
  await del('./lib')
  done()
})

gulp.task('default', gulp.series('clean', 'webpack', 'css', 'copy_css'), (done) => {
  console.log('done')
  done()
})