var appHttp = require('./app.http');
var appStates = require('./app.states');
var appTranslates = require('./translates');
var appGoogleMaps = require('./app.googleMaps');

module.exports = angular.module('you-movin.config', [])
  .config(appHttp)
  .config(appStates)
  .config(appTranslates)
  .config(appGoogleMaps)
  .name;
