(function() {
	'use strict';

	function LoaderService() {
		this.show = function() {
			$("sw-loader").removeClass("hide");
		};

		this.hide = function() {
			$("sw-loader").addClass("hide");
		};

		this.toggle =function() {
			$("sw-loader").toggleClass("hide");
		};
	}

	module.exports = angular.module('loaderService', [])
		.service('loaderService', LoaderService)
		.name;

})();
