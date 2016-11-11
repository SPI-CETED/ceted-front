var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var paths = require('./gulp/config/paths');
var requireDir = require('require-dir');

var configFileName = '/config.{ENV}.json'.replace('{ENV}', gutil.env.environment);

global.config = require(__dirname + configFileName);
gutil.log(gutil.colors.magenta('\n=== USING CONFIG ==='));
gutil.log(gutil.colors.blue(JSON.stringify(global.config, null, 4)));


gutil.log(gutil.colors.magenta('\n=== RUNNING TASKS ==='));
requireDir('./gulp/tasks');

gulp.task('dev', function() {
  del([paths.dist.index])
    .then(function(paths) {
	     gulp.start('lint', 'connect', 'watch', 'open');
     });
});

gulp.task('build', function() {
  del([paths.dist.index])
    .then(function(paths) {
	     gulp.start('bower', 'vendor', 'build_index');
     });
});


gulp.task('test',['connect', 'open']);
