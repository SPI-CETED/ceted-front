var gulp = require('gulp');
var connect = require('gulp-connect');
var paths = require('../config/paths');

gulp.task('reload', ['lint'], function() {
  gulp.src(paths.app.index)
    .pipe(connect.reload());
});
