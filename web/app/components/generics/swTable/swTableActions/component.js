var controller = require('./controller');

module.exports = {
	restrict: 'E',
	bindings: {
		template: '=',
		caller: '='
	},
	controller: controller,
	controllerAs: 'ctrl'
};
