(function() {
    'use strict';

    module.exports = [
        '$scope',
        function YmInputMoneyPercentController($scope) {
            var self = this;

            $scope.$watch('ctrl.model', function(newValue) {
                if (newValue) {
                    self.value = newValue.toString().replace(/[.]+/g, ',');
                }
            });

            self.changeModel = function() {
                if (self.value) {
                    self.value = self.value.replace(/[^0-9,]+/g, '');
                    self.model = self.value.replace(/[,]+/g, '.');
                } else {
                    self.model = null;
                }
            };
        }
    ];

})();
