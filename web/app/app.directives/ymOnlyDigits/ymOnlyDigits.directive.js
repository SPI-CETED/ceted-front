var link = require('./ymOnlyDigits.link');

module.exports = function() {
    return {
    	restrict: 'A',
    	priority: 1,
    	require: '?ngModel',
    	link: link
    };
};
