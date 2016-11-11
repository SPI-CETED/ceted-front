(function() {
	'use strict';

	function PnotifyService($filter) {
    var configDefault =  getConfig();

		this.success = function(translateKey, params) {
      configDefault.title = 'Successo';
      configDefault.text = resolveParams($filter('translate')(translateKey), params);
      configDefault.type = 'success';

      $.pnotify(configDefault);
		};

		this.error = function(translateKey, params) {
      configDefault.title = 'Erro';
      configDefault.text = resolveParams($filter('translate')(translateKey), params);
      configDefault.type = 'error';

      $.pnotify(configDefault);
		};

		this.information = function(translateKey, params) {
      configDefault.title = 'Informação';
      configDefault.text = resolveParams($filter('translate')(translateKey), params);
      configDefault.type = 'info';

      $.pnotify(configDefault);
		};

		this.notice = function(translateKey, params) {
      configDefault.title = 'Noticia';
      configDefault.text = resolveParams($filter('translate')(translateKey), params);
      configDefault.type = 'notice';

      $.pnotify(configDefault);
		};

		function resolveParams(keyTranslated, params) {
			if (params) {
				for (var i = 0; i < params.length; i++) {
					keyTranslated = keyTranslated.replace('{' + i + '}', params[i]);
				}
			}

			return keyTranslated;
		}

    function getConfig() {
      return {
        title: '',
    		title_escape: true,
    		text: '',
    		cornerclass: '',
    		type: '',
    		icon: 'false',
    		width: '320px',
    		closer_hover: false,
    		sticker: true,
    		opacity: 0.9,
    		animation: {
    			effect_in: 'shake',
    			effect_out: 'fade'
    		},
    		addclass: 'pnotify-top'
    	}
    }

	}

	module.exports = angular.module('pnotifyService', [])
		.service('pnotifyService', [
			'$filter',
			PnotifyService
		])
		.name;

})();
