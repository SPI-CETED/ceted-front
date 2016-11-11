var gulp = require('gulp');
var paths = require('../config/paths');

gulp.task('fonts', function() {
  return gulp.src(paths.app.fonts)
    .pipe(gulp.dest(paths.dist.fonts))
});
