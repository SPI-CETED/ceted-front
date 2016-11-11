var formatDateTimeFilter = require('./formatDateTime.filter');

module.exports = angular.module('you-movin.filters', [])
	.filter('dataTimeFormatFilter', formatDateTimeFilter)
	.name;
