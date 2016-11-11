var controller = require('./controller');

module.exports = {
	restrict: 'E',
	bindings: {
		cellTemplate: '=',
		parentRow: '=',
		tableCtrl: '=',
		caller: '='
	},
	controller: controller,
	controllerAs: 'ctrl'
};
