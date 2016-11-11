(function() {
    'use strict';

    function BlobbService() {
        var self = this;

        self.base64toBlob = function(b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;

            b64Data = b64Data.replace(/^data:image\/\w+;base64,/, "");

            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays);

            return blob;
        };
    }

    module.exports = angular.module('blobService', [])
        .service('blobService', BlobbService)
        .name;

})();
