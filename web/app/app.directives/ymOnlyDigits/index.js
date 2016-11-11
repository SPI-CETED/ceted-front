var directive = require('./ymOnlyDigits.directive');

module.exports = angular.module('ymOnlyDigits', [])
	.directive('ymOnlyDigits', directive)
	.name;
