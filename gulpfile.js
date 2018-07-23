const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const scss = require('gulp-sass')
const gutil = require('gulp-util')
const plumber = require('gulp-plumber')


gulp.task('scss', function() {
  return gulp.src(['raw-assets/scss/*.scss'])
    .pipe(plumber())
    .pipe(scss())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream())
})

gulp.task('serve', ['scss'], function() {
  browserSync.init({
    server: './'
  })

  gulp.watch(['raw-assets/scss/*.scss'], ['scss']);
  gulp.watch(['*.html']).on('change', browserSync.reload);
})

gulp.task('default', ['serve'])