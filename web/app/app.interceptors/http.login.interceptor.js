function HttpLoginInterceptor ($rootScope, $q, $injector) {
	return {
		request: function(request) {
			return request;
		},
		response: function(response) {
			return response;
		},
		responseError: function(response) {
			var deferred = $q.defer();
			deferred.reject(response);
			return deferred.promise;
		}
	};
}

module.exports = angular.module('httpLoginInterceptor', [])
.factory('httpLoginInterceptor', [
	'$rootScope',
	'$q',
	'$injector',
	HttpLoginInterceptor
	])
	.name;
