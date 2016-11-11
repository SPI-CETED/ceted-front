(function() {
  'use strict';

  var mapModalController = require('./map-modal/controller');

  module.exports = [
    '$scope',
    'bootBoxService',
    'modalService',
    function YmMapAddress($scope, bootBoxService, modalService) {
      var self = this;

      self.openMap = function() {
        var modal = {
          templateUrl: 'app/components/generics/ymMapAddress/map-modal/template.html',
          controller: mapModalController,
          controllerAs: 'ctrl',
          resolve: {
            address: function() { return self.address; },
          },
          size: 'lg'
        };

        modalService.custonModal(modal)
          .result
            .then(function(result) {
              self.address = result.address;
            });
      };
    }
  ];
})();
