(function() {
	'use strict';

	function GenderService($http, CONFIG) {
    var self = this;
    var BASE_URL = CONFIG.apiUrl + '/gender'

		self.findAll = function() {
      return $http.get(BASE_URL).then(function(result) { return result.data; });
		};
	}

	module.exports = angular.module('genderService', [])
		.service('genderService', [
      '$http',
      'CONFIG',
      GenderService
    ])
		.name;

})();
