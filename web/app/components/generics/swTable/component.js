var controller = require('./controller');

module.exports = {
	bindings: {
		options: '=',
		resource: '=',
		safeResource: '=',
		caller: '='
	},
	templateUrl: 'app/components/generics/swTable/template.html',
	controller: controller,
	controllerAs: 'ctrl'
};
