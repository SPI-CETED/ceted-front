module.exports = [
    'dateService',
    function(dateService) {
    	return function(dateTimeParam) {
    		if (dateTimeParam) {
    			return dateService.formatDateTime(dateTimeParam, 'LLL');
    		}

    		return '';
    	};
    }
];
