(function() {
	'use strict';

	function ProfileService($http, CONFIG) {
    var self = this;
    var BASE_URL = CONFIG.apiUrl + '/profiles';

		self.findPerfil = function(nickname) {
      return $http.get(BASE_URL + '/user/' + nickname)
        .then(function(result) { return result.data });
		};

		self.register = function(registerUser) {
      return $http.post(BASE_URL, registerUser).then(function(result) { return result.data });
		};

		self.update = function(user) {
      return $http.put(BASE_URL, user).then(function(result) { return result.data });
		};
	}

	module.exports = angular.module('profileService', [])
		.service('profileService', [
      '$http',
      'CONFIG',
			ProfileService
		])
		.name;

})();
