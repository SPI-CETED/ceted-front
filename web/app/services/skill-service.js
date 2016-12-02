(function() {
	'use strict';

	function ProfileService($http, CONFIG) {
    var self = this;
    var BASE_URL = 'http://localhost:8084/v1/habilities';

		self.create = function(hability) {
      return $http.post(BASE_URL, hability);
		};

		self.update = function(hability) {
      return $http.put(BASE_URL + '/' + hability.id, hability);
		};

		self.list = function() {
      return $http.get(BASE_URL + '/list');
		};

		self.delete = function(id) {
      return $http.delete(BASE_URL + '/' + id);
		};

		self.find = function(id) {
      return $http.get(BASE_URL + '/' + id);
		};
	}

	module.exports = angular.module('skillService', [])
		.service('skillService', [
      '$http',
      'CONFIG',
			ProfileService
		])
		.name;

})();
