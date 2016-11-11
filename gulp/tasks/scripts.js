var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var paths = require('../config/paths');

gulp.task('scripts', function() {
  return browserify({
    entries: './web/app/app.js',
    paths: ['bower_components']
  })
  .bundle()
  .on('error', function (e) {
    gutil.log(e);
    this.emit('end');
  })
  .pipe(source('app_bundle.js'))
  // .pipe(buffer())
  // .pipe(uglify())
  .pipe(gulp.dest('./dist/app'))
});
