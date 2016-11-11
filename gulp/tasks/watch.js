var gulp = require('gulp');
var watch = require('gulp-watch');
var paths = require('../config/paths');

gulp.task('watch', function() {
  watch([
      paths.app.index,
      paths.app.sass,
      paths.app.sassGlobal,
      paths.app.scripts,
      paths.app.templates
    ],
    function() {
      gulp.start('reload');
    });
});
