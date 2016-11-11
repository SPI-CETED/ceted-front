function HttpLoginInterceptor ($rootScope, $q, $injector) {
	return {
		request: function(request) {
			var $http = $injector.get('$http');
			var loginService = $injector.get('loginService');
			var loggedUser 	= loginService.getLoggedUserLocalStorage();

			if (loggedUser) {
				request.headers['X-Access-Token'] = loggedUser.token;
			}

			return request;
		},
		response: function(response) {
			return response;
		},
		responseError: function(response) {
			var loginService = $injector.get('loginService');
			var $state = $injector.get('$state');

			if ([403, 401].indexOf(response.status) >= 0) {
				loginService.removeLoggedUserLocalStorage();
				$state.transitionTo('auth');
			}

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
