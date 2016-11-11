var links = require('./swDatetimepickerTimezone.link');

module.exports = function() {
    return {
    	restrict: 'A',
    	priority: 1,
    	require: 'ngModel',
    	link: links
    };
};
