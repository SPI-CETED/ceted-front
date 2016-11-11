var gulp   = require('gulp');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var paths = require('../config/paths');

gulp.task('lint', ['sass', 'sass_global', 'scripts', 'templates', 'fonts', 'images'], function() {
    return gulp.src([
        paths.app.app,
        paths.app.appComponents + '/**/*.js',
        paths.app.appConfig + '/**/*.js',
        paths.app.appComponents + '/**/*.js',
        paths.app.appConstants + '/**/*.js',
        paths.app.appDirectives + '/ym**/*.js',
        paths.app.appFilters + '/**/*.js',
        paths.app.appInterceptors + '/**/*.js',
        paths.app.appServices + '/**/*.js'
        ])
        .pipe(jscs())
        .pipe(stylish());
});
