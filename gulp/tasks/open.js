var gulp = require('gulp');
var os = require('os');
var open = require('gulp-open');

var HOST = 'http://localhost:3000',
    BROWSER = os.platform() === 'linux' ? 'google-chrome' : (os.platform() === 'win32' ? 'chrome' : 'firefox');

gulp.task('open', ['build_index'], function(){
  var options = {
    uri: HOST,
    app:BROWSER
  };

  gulp.src(__filename)
  .pipe(open(options));
});
