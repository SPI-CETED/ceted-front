(function() {
	'use strict';

	function ToastrService($filter) {
		this.success = function(translateKey, params) {
			toastr.success(resolveParams($filter('translate')(translateKey), params));
		};

		this.error = function(translateKey, params) {
			toastr.error(resolveParams($filter('translate')(translateKey), params));
		};

		this.info = function(translateKey, params) {
			toastr.info(resolveParams($filter('translate')(translateKey), params));
		};

		this.warning = function(translateKey, params) {
			toastr.warning(resolveParams($filter('translate')(translateKey), params));
		};

		function resolveParams(keyTranslated, params) {
			if (params) {
				for (var i = 0; i < params.length; i++) {
					keyTranslated = keyTranslated.replace('{' + i + '}', params[i]);
				}
			}

			return keyTranslated;
		}
	}

	module.exports = angular.module('toastrService', [])
		.service('toastrService', [
			'$filter',
			ToastrService
		])
		.name;

})();
