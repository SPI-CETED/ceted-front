(function() {
    'use strict';

    function ConfigSystem($http, CONFIG) {
        var baseUrl = CONFIG.apiUrl + 'api/config-system';

        this.create = function(configSystem) {
            return $http.post(baseUrl, configSystem)
              .then(
                  function(response) {
                    return response.data;
                });
        };

        this.update = function(configSystem) {
            return $http.put(baseUrl + '/' + configSystem.Id, configSystem)
              .then(function(response) {
                return response.data;
              });
        };

        this.getById = function(id) {
            return $http.get(baseUrl + '/' + id)
              .then(function(response) {
                return response.data;
              });
        };

        this.getAll = function(id) {
            return $http.get(baseUrl)
              .then(function(response) {
                return response.data;
              });
        };

        this.getByKeys = function(keys) {
            return $http.get(baseUrl + '/keys', { params: { keys: keys } })
              .then(function(response) {
                return response.data;
              });
        };
    }

    module.exports = angular.module('configSystemService', [])
        .service('configSystemService', [
        	'$http',
        	'CONFIG',
        	ConfigSystem
        ]).name;

})();
