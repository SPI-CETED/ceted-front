(function() {
    'use strict';

    module.exports = [
      function YmDatePickerController() {
          var ctrl = this;

          ctrl._onUpdate = function(model) {
              ctrl.onUpdate({ date: model });
          };
      }
    ];

})();
