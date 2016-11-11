(function() {
    'use strict';

    function ModalService($uibModal) {
        var defaultOptions = {
            openedClass: 'modal-opened',
            backdrop: 'static',
            controllerAs: 'ctrl',
            size: 'md'
        }

        this.custonModal = function(modal) {
            var options = angular.extend(defaultOptions, modal);
            return $uibModal.open(options);
        };
    }

    module.exports = angular.module('modalService', [])
        .service('modalService', [
        '$uibModal',
        ModalService
    ]).name;

})();
