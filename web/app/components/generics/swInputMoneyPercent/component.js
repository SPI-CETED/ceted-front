var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swInputMoneyPercent/template.html',
  controllerAs: 'ctrl',
  bindings: {
      model: '=',
      blur: '=?',
      helper: '=?',
      componentName: '@',
      componentId: '@',
      label: '@',
      percentage: '@',
      money: '@',
      required: '=',
      disabled: '@',
      placeholder: '@',
      currency: '@?'
  },
  controller: controller
};
