var swLogin = require('./swLogin');

var swSkillCreate = require('./swSkill/create');
var swSkillList = require('./swSkill/list');

var swUserCreate = require('./swUser/create');
var swUserEdit = require('./swUser/edit');
var swUserList = require('./swUser/list');

module.exports = angular.module('you-movin.components.pages', [
  swLogin,

  swSkillCreate,
  swSkillList,

  swUserCreate,
  swUserEdit,
  swUserList
]).name;
