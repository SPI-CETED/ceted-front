module.exports = [
	'$scope',
	'$element',
	'$compile',
	function UnTableActionsCtrl($scope, $element, $compile) {
		var elementCompiled = $compile(this.template)($scope);
		$element.replaceWith(elementCompiled);
	}
];
