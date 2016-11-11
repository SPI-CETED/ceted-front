var gulp = require('gulp');
var bower = require('gulp-bower');
var paths = require('../config/paths');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(paths.app.bowerComponents))
});
