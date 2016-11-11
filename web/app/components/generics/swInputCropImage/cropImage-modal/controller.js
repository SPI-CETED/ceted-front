(function() {
    'use strict';

    module.exports = [
      '$scope',
      '$uibModalInstance',
      '$timeout',
      'Cropper',
      'sourceImage',
      'file',
      'optionsCropper',
      'toastrService',
      function CropImageModal($scope, $uibModalInstance, $timeout, Cropper, sourceImage, file, optionsCropper, toastrService) {
          var self = this;
          var data = null;

          self.optionsCropper = optionsCropper;
          self.sourceImage = sourceImage;
          self.showEvent = 'show';
          self.hideEvent = 'hide';
          self.cropper = {};
          self.cropperProxy = 'ctrl.cropper.' + self.optionsCropper.proxyCropper;

          $timeout(showCropper);

          self.options = {
            aspectRatio: self.optionsCropper.aspectRatio,
            zoomable: self.optionsCropper.zoomable,
            minCropBoxWidth: self.optionsCropper.minCropBoxWidth,
            minCropBoxHeight: self.optionsCropper.minCropBoxHeight,
            crop: function(dataNew) {
              data = dataNew;
            }
          };

          self.ok = function() {
            if (!file || !data) {
              return;
            }

            if (!self.cropper[self.optionsCropper.proxyCropper]) {
              return;
            }

            var getData = self.cropper[self.optionsCropper.proxyCropper]('getData');

            // Código comentado para validar como Ivano
            // if (data.width < self.optionsCropper.minCropBoxWidth &&
            //     data.height < self.optionsCropper.minCropBoxHeight) {
            //
            //     toastrService.error('imageNeedBeBigger', [self.optionsCropper.minCropBoxWidth, self.optionsCropper.minCropBoxHeight]);
            //     return;
            // }

            Cropper.crop(file, data)
              .then(Cropper.encode)
                .then(function(imageSourceCropped) {
                  $uibModalInstance.close({
                    imageSourceCropped: imageSourceCropped,
                    file: file
                  });
                });
          };

          self.cancel = function() {
            $uibModalInstance.dismiss('cancel');
          };

          function showCropper() {
            $scope.$broadcast(self.showEvent);
          }

          function hideCropper() {
            $scope.$broadcast(self.hideEvent);
          }
      }
    ];

})();
