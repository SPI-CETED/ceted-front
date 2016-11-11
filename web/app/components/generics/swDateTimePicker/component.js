var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swDateTimePicker/template.html',
  controllerAs: 'ctrl',
  bindings: {
    model: '=',
    options: '=?',
    onlyDate: '=?', // boolean: show only de calendar for date, not time.
    datepickerOptions: '=?', // UIB datepicker options
    label: '@',
    componetName: '@',
    required: '@',
    onUpdate: '&'
  },
  controller: controller
};
