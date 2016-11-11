module.exports = [
	'$scope',
	'$element',
	'$compile',
	function SwCellController($scope, $element, $compile) {
			var elementCompiled = $compile(this.cellTemplate)($scope);
			$element.replaceWith(elementCompiled);
	}
];
