(function() {
    'use strict';

    var cropImageModalController = require('./cropImage-modal/controller');

    module.exports = [
      '$scope',
      '$timeout',
      'modalService',
      'CONFIG',
      'Cropper',
      function YmInputCropImageController($scope, $timeout, modalService, CONFIG, Cropper) {
        var self = this;

        self.urlAmazonPhotos = CONFIG.urlAmazonPhotos;

        self.remove = function() {
          self.cleanInput();
          self.addInvisibleClass = true;
          $timeout(function() {
            self.addInvisibleClass = false;
            self.imageSourceCropped = null;
            self.imgUploaded = null;
          }, 500);

          if (typeof self.change === 'function') {
            self.change();
          }
      };

        self.cleanInput = function() {
          var query = '#' + self.idCropper;

          var input = angular.element(query);
          input.replaceWith(input.val('').clone(true));
        };

        self.imageChange = function(blob) {
          var file = blob;

          Cropper.encode(file)
            .then(function(sourceImage) {
              var modal = {
                templateUrl: 'app/app.components/components.generics/ymInputCropImage/cropImage-modal/template.html',
                controller: cropImageModalController,
                controllerAs: 'ctrl',
                resolve: {
                  sourceImage: function() { return sourceImage; },
                  file: function() { return file; },
                  optionsCropper: function() { return self.optionsCropper; },
                },
                size: 'lg'
              };

              var modaInstance = modalService.custonModal(modal);

              modaInstance.result
                .then(function(result) {
                  if (result.imageSourceCropped && result.file) {
                    self.imageSourceCropped = result.imageSourceCropped;
                    self.file = result.file;

                    if (typeof self.change === 'function') {
                      self.change();
                    }
                  }
                });

              modaInstance.closed
                .then(function() {
                  self.cleanInput();
                });
            });
        };
      }
    ];

})();
