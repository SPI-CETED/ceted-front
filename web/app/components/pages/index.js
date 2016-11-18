var swLogin = require('./swLogin');
var swSkillCreate = require('./swSkill/create');
var swSkillList = require('./swSkill/list');

module.exports = angular.module('you-movin.components.pages', [
  swLogin,
  swSkillCreate,
  swSkillList
]).name;
