var translatePtBr = require('./pt-BR.json');
var translateEn = require('./en.json');

module.exports = [
	'$translateProvider',
	function($translateProvider) {
		$translateProvider.translations('en', translateEn);
		$translateProvider.translations('pt-BR', translatePtBr);

		$translateProvider.useSanitizeValueStrategy(null);

		$translateProvider.registerAvailableLanguageKeys([ 'en', 'pt-BR' ], {
			'*': 'pt-BR', // linguagem default do sistema
			'en': 'en'
		}).determinePreferredLanguage();
	}
];
