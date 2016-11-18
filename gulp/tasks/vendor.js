var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

var paths = require('../config/paths');

gulp.task('vendor_scripts', ['bower'], function() {
  return gulp.src([
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/datatables/media/js/jquery.dataTables.min.js',
    './bower_components/angular/angular.min.js',
    './bower_components/angular-base64/angular-base64.min.js',
    './bower_components/angular-slimscroll/angular-slimscroll.js',
    './bower_components/angular-translate/angular-translate.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './bower_components/bootstrap/dist/js/bootstrap.min.js',
    './bower_components/moment/moment.js',
    './bower_components/moment/locale/pt-br.js',
    './bower_components/moment/locale/en.js',
    './bower_components/pickadate/lib/picker.js',
    './bower_components/pickadate/lib/picker.date.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    './bower_components/angular-animate/angular-animate.min.js',
    './bower_components/angular-datatables/dist/angular-datatables.min.js',
    './bower_components/angular-smart-table/dist/smart-table.js',
    './bower_components/bootbox/bootbox.js',
    './bower_components/ngBootbox/dist/ngBootbox.min.js',
    './bower_components/angular-locale-pt-br/index.js',
    './bower_components/lodash/dist/lodash.min.js',
    './bower_components/angular-simple-logger/dist/angular-simple-logger.min.js',
    './bower_components/ng-file-upload/ng-file-upload.min.js',
    './bower_components/angular-img-cropper/dist/angular-img-cropper.min.js',
    './bower_components/angular-img-cropper/dist/angular-img-cropper.min.js',
    './bower_components/ng-cropper/dist/ngCropper.all.js',
    './bower_components/ng-tags-input/ng-tags-input.min.js',
    './bower_components/textAngular/dist/textAngular-rangy.min.js',
    './bower_components/textAngular/dist/textAngular-sanitize.min.js',
    './bower_components/textAngular/dist/textAngular.min.js',

    './web/app/vendor/js/modernizr.js',
    './web/app/vendor/js/mobile-detect.min.js',
    './web/app/vendor/js/mobile-detect-modernizr.js',

    './web/app/vendor/jquery-ui/jquery-ui.custom.min.js',
    './web/app/vendor/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',
    './web/app/vendor/js/caroufredsel.js',
    './web/app/vendor/js/plugins.js',
    './web/app/vendor/breakpoints/breakpoints.js',
    './web/app/vendor/dataTables/jquery.dataTables.min.js',
    './web/app/vendor/prettyPhoto-plugin/js/jquery.prettyPhoto.js',
    './web/app/vendor/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js',
    './web/app/vendor/tagsInput/jquery.tagsinput.min.js',
    './web/app/vendor/bootstrap-switch/bootstrap-switch.min.js',
    './web/app/vendor/blockUI/jquery.blockUI.js',
    './web/app/vendor/pnotify/js/jquery.pnotify.min.js',
    './web/app/vendor/js/theme.js',
    './web/app/vendor/flot/jquery.flot.min.js',
    './web/app/vendor/flot/jquery.flot.resize.min.js',
    './web/app/vendor/flot/jquery.flot.pie.min.js',
    './web/app/vendor/flot/jquery.flot.categories.min.js',
    './web/app/vendor/flot/jquery.flot.time.min.js',
    './web/app/vendor/flot/jquery.flot.animator.min.js',
    './web/app/vendor/jvectormap/jquery-jvectormap-2.0.3.min.js',
    './web/app/vendor/jquery-ui/jquery-ui.custom.min.js',
    './web/app/vendor/fullcalendar/fullcalendar.min.js',
    './web/app/vendor/introjs/js/intro.min.js',
    './web/app/vendor/skycons/skycons.js',
    './web/app/vendor/jquery-ui/jquery-ui.custom.min.js',
    './web/app/vendor/jquery-ui/jquery-ui.custom.min.js',
    './web/app/vendor/chosen/js/chosen.jquery.js'
  ])
  .pipe(concat('vendor_scripts_bundle.min.js'))
  // .pipe(uglify())
  .pipe(gulp.dest(paths.dist.vendor));
});

gulp.task('vendor_styles', function() {
  return gulp.src([
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './bower_components/font-awesome/css/font-awesome.min.css',

    './web/app/vendor/css/font-entypo.css',
    './web/app/vendor/css/font.css',
    './web/app/vendor/jquery-ui/jquery-ui.custom.min.css',
    './web/app/vendor/prettyPhoto-plugin/css/prettyPhoto.css',
    './web/app/vendor/isotope/css/isotope.css',
    './web/app/vendor/pnotify/css/jquery.pnotify.css',
    './web/app/vendor/mCustomScrollbar/jquery.mCustomScrollbar.css',
    './web/app/vendor/tagsInput/jquery.tagsinput.css',
    './web/app/vendor/bootstrap-switch/bootstrap-switch.css',
    './web/app/vendor/daterangepicker/daterangepicker-bs3.css',
    './web/app/vendor/bootstrap-timepicker/bootstrap-timepicker.min.css',
    './web/app/vendor/colorpicker/css/colorpicker.css',
    './web/app/vendor/fullcalendar/fullcalendar.css',
    './web/app/vendor/css/chrome.css',
    './web/app/vendor/jvectormap/jquery-jvectormap-2.0.3.css',
  ])
  .pipe(cssmin({
    keepSpecialComments: 0
  }))
  .pipe(concat('vendor_styles_bundle.min.css'))
  .pipe(gulp.dest(paths.dist.vendor));
});

gulp.task('vendor', ['vendor_styles', 'vendor_scripts']);
