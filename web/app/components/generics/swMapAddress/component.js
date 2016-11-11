var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swMapAddress/template.html',
  controllerAs: 'ctrl',
  bindings: {
    address: '=',
    required: '@',
    componentName: '@'
  },
  controller: controller
};
