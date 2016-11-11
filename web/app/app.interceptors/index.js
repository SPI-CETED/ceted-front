var httpLoginInterceptor = require('./http.login.interceptor');
var httpLoaderInterceptor = require('./http.loader.interceptor');

module.exports = angular.module("you-movin.interceptors", [
  httpLoginInterceptor,
  httpLoaderInterceptor
]).name;
