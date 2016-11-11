(function() {
    'use strict';

    module.exports =
        function DatetimepickerTimezoneLink(scope, element, attrs, ctrl) {
            ctrl.$formatters.push(function(value) {
                if (value) {
                    var date = new Date(Date.parse(value));
                    date = new Date(date.getTime() + (60000 * date.getTimezoneOffset()));
                    return date;
                }

                return value;
            });

            ctrl.$parsers.push(function(value) {
                if (value) {
                    var date = new Date(value.getTime() - (60000 * value.getTimezoneOffset()));
                    return date;
                }

                return value;
            });
        };
})();
