var gulp = require('gulp');
var inject = require('gulp-inject');
var series = require("stream-series");
var paths = require('../config/paths');

gulp.task('build_index', ['vendor', 'config-generator', 'sass', 'sass_global', 'scripts', 'templates', 'fonts', 'images'], function() {
  var vendor = gulp.src([
    './dist/vendor/**/*.js',
    './dist/vendor/vendor_styles_bundle.min.css'
  ]);

  var styles = gulp.src([
    paths.dist.sassGlobal + '/**/*.css',
    paths.dist.sass + '/**/*.css',
  ]);

  var scripts = gulp.src([
      './dist/app/**.*js'
  ]);

  return gulp.src(paths.app.index)
    .pipe(inject(series(vendor, styles, scripts), {addRootSlash: false, ignorePath: '/dist'}))
    .pipe(gulp.dest(paths.dist.index))
});
