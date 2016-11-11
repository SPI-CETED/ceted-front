var swLoader = require('./swLoader');
var swBase = require('./swBase');
var swMenu = require('./swMenu');
var swHeader = require('./swHeader');
var swFooter = require('./swFooter');
var swTable = require('./swTable');
var swDateTimePicker = require('./swDateTimePicker');
var swInputCropImage = require('./swInputCropImage');
var swMapAddress = require('./swMapAddress');
var swInputMoneyPercent = require('./swInputMoneyPercent');
var swSidebarChat = require('./swSidebarChat');

module.exports = angular.module('you-movin.components.generics', [
  swLoader,
  swBase,
  swMenu,
  swHeader,
  swFooter,
  swTable,
  swDateTimePicker,
  swInputCropImage,
  swMapAddress,
  swInputMoneyPercent,
  swSidebarChat
])
.name;
