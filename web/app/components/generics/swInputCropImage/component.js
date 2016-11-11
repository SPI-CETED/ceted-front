var controller = require('./controller');

module.exports = {
  restrict: 'E',
  templateUrl: 'app/components/generics/swInputCropImage/template.html',
  controllerAs: 'ctrl',
  bindings: {
    imageSourceCropped: '=',
    file: '=',
    optionsCropper: '=',
    idCropper: '@',
    imgUploaded: '=',
    change: '='
  },
  controller: controller
};
