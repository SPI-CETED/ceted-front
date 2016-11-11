(function () {
    'use strict';

    module.exports =
        function OnlyDigitsDirective(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue === undefined || inputValue === null) return '';
                var transformedInput = String(inputValue).replace(/[^0-9]/g, '');

                if (!!transformedInput) {
                    transformedInput = +transformedInput;
                }

                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        };
})();
