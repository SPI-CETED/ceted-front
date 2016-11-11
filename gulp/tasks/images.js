var gulp = require('gulp');
var paths = require('../config/paths');

gulp.task('images', function() {
  return gulp.src(paths.app.images)
    .pipe(gulp.dest(paths.dist.images))
});
