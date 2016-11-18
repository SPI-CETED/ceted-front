(function() {
    'use strict';

    var appInterceptors = require('./app.interceptors');
    var appServices = require('./services');
    var appConfig = require('./app.config');
    var configSecretWishes = require('./app.constants/configSecretWishes');
    var values = require('./app.constants/values').VALUES;
    var filters = require('./app.filters');
    var directives = require('./app.directives');
    var components = require('./components');

angular.module('you-movin', [
  'pascalprecht.translate',
  'ui.router',
  'base64',
  'ui.bootstrap',
  'ngAnimate',
  'smart-table',
  'ngBootbox',
  'uiGmapgoogle-maps',
  'ngFileUpload',
  'angular-img-cropper',
  'ngCropper',
  'ngTagsInput',
  'textAngular',
  appConfig,
  appInterceptors,
  appServices,
  filters,
  directives,
  components
])
  .constant('CONFIG', configSecretWishes)
  .constant('VALUES', values)
  .run([
		"$rootScope",
		"$state",
		"CONFIG",
    "loginService",
		function($rootScope, $state, CONFIG, loginService) {
			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        
			});
		}
]);

})();
