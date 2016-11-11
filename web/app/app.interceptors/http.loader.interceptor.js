function HttpLoaderInterceptor ($rootScope, $q) {
    function canRaiseEvent(config) {
        return config.url.search(/https?:\/\//) >= 0;
    }

    return {
        request: function(config) {
            if (canRaiseEvent(config)) {
                $rootScope.statusRequest = 1;
                $rootScope.$broadcast("HTTP_REQUEST_START", {});
            }

            return config;
        },

        requestError: function(config) {
            if (canRaiseEvent(config)) {
                $rootScope.statusRequest = 0;
                $rootScope.$broadcast("HTTP_REQUEST_END", {});
            }

            return config;
        },

        response: function(response) {
            if (canRaiseEvent(response.config)) {
                $rootScope.statusRequest = 0;
                $rootScope.$broadcast("HTTP_REQUEST_END", {});
            }

            return response;
        },

        responseError: function(response) {
            if (canRaiseEvent(response.config)) {
                $rootScope.statusRequest = 0;
                $rootScope.$broadcast("HTTP_REQUEST_END", {});
            }

            return $q.reject(response);
        }
    };
}

module.exports = angular.module('httpLoaderInterceptor', [])
    .factory('httpLoaderInterceptor', [
        '$rootScope',
        '$q',
        HttpLoaderInterceptor ])
    .name;
