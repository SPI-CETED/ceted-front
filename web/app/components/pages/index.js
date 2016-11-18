var swLogin = require('./swLogin');
var swSkill = require('./swSkill');

module.exports = angular.module('you-movin.components.pages', [
  swLogin,
  swSkill
]).name;
