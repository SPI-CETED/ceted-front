(function() {
	'use strict';

	function BootBoxService($filter, $ngBootbox) {
		this.alert = function(translateKey, params) {
			return $ngBootbox.alert(resolveParams($filter("translate")(translateKey), params));
		};

		this.confirm = function(translateKey, params) {
			var keyTranslated = resolveParams($filter("translate")(translateKey), params);
			return $ngBootbox.confirm(keyTranslated);
		};

		this.prompt = function(translateKey, params) {
			return $ngBootbox.prompt(resolveParams($filter("translate")(translateKey), params));
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

	module.exports = angular.module('bootBoxService', [])
		.service('bootBoxService', [
			'$filter',
			'$ngBootbox',
			BootBoxService
		]).name;

})();
