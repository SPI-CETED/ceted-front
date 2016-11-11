var gulp = require('gulp');
var connect = require('gulp-connect');
var paths = require('../config/paths');
var rewrite = require('connect-modrewrite');
var history = require('connect-history-api-fallback');

// No Linux para funcionar o reload, é preciso instalar a extensão no browser do 'LiveReload'
gulp.task('connect', function() {
  connect.server({
    root: paths.dist.index,
    livereload: true,
    port: 3000,
    middleware: function(connect, options) {
        return [
            connect().use(
              history()
            )
        ]
    }
  });
});
