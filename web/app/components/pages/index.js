var swLogin = require('./swLogin');

var swSkillCreate = require('./swSkill/create');
var swSkillList = require('./swSkill/list');

var swUserCreate = require('./swUser/create');
var swUserEdit = require('./swUser/edit');
var swUserList = require('./swUser/list');

var swProjectCreate = require('./swProject/create');
var swProjectEdit = require('./swProject/edit');
var swProjectList = require('./swProject/list');

module.exports = angular.module('you-movin.components.pages', [
  swLogin,

  swSkillCreate,
  swSkillList,

  swUserCreate,
  swUserEdit,
  swUserList,

  swProjectCreate,
  swProjectEdit,
  swProjectList
]).name;
