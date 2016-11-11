(function() {
    'use strict';

    function MaritialStatusService($http, CONFIG) {
        var self = this;
        var BASE_URL = CONFIG.apiUrl + '/maritial-status';

        self.findAll = function() {
            return $http.get(BASE_URL).then(function(response) { return response.data });
        };
    }

    module.exports = angular.module('maritialStatusService', [])
        .service('maritialStatusService', [
        	'$http',
        	'CONFIG',
        	MaritialStatusService
        ]).name;

})();
