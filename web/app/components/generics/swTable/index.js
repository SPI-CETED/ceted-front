var component = require('./component');

var swCell = require('./swCell');
var swActions = require('./swTableActions');

module.exports = angular
	.module('swTable', [
		swCell,
		swActions
	])
	.component('swTable', component)
	.name;
