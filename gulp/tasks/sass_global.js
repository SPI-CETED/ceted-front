var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var paths = require('../config/paths');

gulp.task('sass_global', function () {
  return gulp.src(paths.app.sassGlobal)
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(concat('global_styles_bundle.min.css'))
    .pipe(gulp.dest(paths.dist.sassGlobal));
});
