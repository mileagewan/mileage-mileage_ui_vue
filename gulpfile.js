const gulp = require('gulp')
const babel = require('gulp-babel')
const clean = require('gulp-clean')
const less = require('gulp-less')
gulp.task('builds', (done) => {
  gulp.src('./src/template/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./template'))
  done()
})
gulp.task('clean', (done) => {
  gulp.src('./template')
    .pipe(clean())

  done()
})

gulp.task('css', (done) => {
  gulp.src('./src/packages/theme/lib')
    .pipe(clean())
    .pipe(
      gulp.src('./src/packages/theme/**/*.less')
        .pipe(less())
        .pipe(
          gulp.dest('./src/packages/theme/lib')
        )
    )
  done()
})

gulp.task('default', gulp.series('clean', 'build'), (done) => {
  done()
})