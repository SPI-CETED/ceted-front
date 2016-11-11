var componentsGenerics = require('./generics');
var componentsPages = require('./pages');

module.exports = angular.module('you-movin.components', [
  componentsGenerics,
  componentsPages
])
.name;
