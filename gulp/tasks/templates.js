var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var paths = require('../config/paths');

gulp.task('templates', function() {
  return gulp.src(paths.app.templates)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.dist.templates))
});
