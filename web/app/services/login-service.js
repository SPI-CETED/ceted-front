(function() {
    'use strict';

    function LoginService($rootScope, $http, CONFIG) {
        var baseUrl = CONFIG.apiUrl + '/auth';
        var self = this;

        self.login = function(credentials) {
          return $http.post(baseUrl + '/authenticate', credentials).then(function(response) {
            self.saveLoggedUserLocalStorage(response.data.data);
            $rootScope.loggedUser = response.data.data;
            $rootScope.userAuthenticated  = true;
            return response.data;
          });
        };

        self.checkAuth = function() {
          return $http.post(baseUrl + '/checkAuth').then(function(response) {
            return response.data;
          });
        }

        self.logout = function() {
          self.removeLoggedUserLocalStorage();
        }

        self.getLoggedUserLocalStorage = function() {
          var localStorageString = localStorage.getItem('loggedUser');
          return JSON.parse(localStorageString);
        }

        self.removeLoggedUserLocalStorage = function() {
          localStorage.removeItem('loggedUser');
        }

        self.saveLoggedUserLocalStorage = function(loggedUser) {
          localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        }
    }

    module.exports = angular.module('loginService', [])
        .service('loginService', [
          '$rootScope',
        	'$http',
        	'CONFIG',
        	LoginService
        ]).name;

})();
