(function() {
    'use strict';

    function DateService() {
      var self = this;

    	self.locale = 'pt-br';
    	self.defaultDateFormat = 'L';
    	self.defaultDateTimeFormat =  self.defaultDateFormat + ' HH:mm';

    	self.formatDate = function(dateAsString, dateFormat) {
    		var momentDate = moment.utc(dateAsString).locale(self.locale);
    		return momentDate.format(dateFormat || self.defaultDateFormat);
    	};

    	self.formatDateTime = function(dateTimeAsString, dateTimeFormat) {
    		var momentDateTime = moment.utc(dateTimeAsString).locale(self.locale);
    		return momentDateTime.format(dateTimeFormat || self.defaultDateTimeFormat);
    	};

    	self.currentDate = function(dateFormat) {
    		return self.formatDate(new Date().toISOString(), dateFormat);
    	};

    	self.currentDateTime = function(dateTimeFormat) {
    		return self.formatDateTime(new Date().toISOString(), dateTimeFormat);
    	};

    	self.momentToDate = function(date, format) {
    		if (format) {
    			return new Date(moment(date).utcOffset('pt-BR').format(format));
    		}

    		return new Date(moment(date).utcOffset('pt-BR').format('YYYY-MM-DD HH:mm'));
    	};

        self.momentAddDay = function(days, date) {
            if (date) {
                return moment(date).add(days, 'days');
            }

            return moment().add(days, 'days');
        };

        self.diff = function(startDate, endDate, unit) {
            unit = unit || 'seconds';
            var milliseconds = (endDate - startDate);

            if (unit === 'days') {
                return Math.round(milliseconds / 1000 / 60 / 60 / 24);
            } else if (unit === 'hours') {
                return Math.round(milliseconds / 1000 / 60 / 60);
            } else if (unit === 'minutes') {
                return Math.round(milliseconds / 1000 / 60);
            } else if (unit === 'seconds') {
                return Math.round(milliseconds / 1000);
            }

            return null;
        };
    }

    module.exports = angular.module('dateService', [])
    	.service('dateService', DateService)
    	.name;

})();
