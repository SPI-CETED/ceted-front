var swdatetimepickerTimezone = require('./swDatetimepickerTimezone');
var chosen = require('./chosen');
var onlyDigits = require('./ymOnlyDigits');

module.exports = angular.module('you-movin.directives', [
    swdatetimepickerTimezone,
    chosen,
    onlyDigits
]).name;
