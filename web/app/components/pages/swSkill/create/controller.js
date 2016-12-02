(function () {
    'use strict';

    module.exports = [
      '$state',
      'skillService',
      'pnotifyService',
      function SwSkillCreateController($state, skillService, pnotifyService) {
          var self = this;

          self.skill = {};

          self.$onInit = function() {
            if ($state.params.id) {
              skillService.find($state.params.id).then(function(data) {
                self.skill = data.data;
              });
            }
          };

          self.save = function() {
            if (self.skill.id) {
              skillService.update(self.skill).then(function(data) {
                pnotifyService.success('Registro salvo com successo!');
              });
            } else {
              skillService.create(self.skill).then(function(data) {
                pnotifyService.success('Registro salvo com successo!');
                self.skill = {};
              });
            }

          };

          self.delete = function() {
            skillService.delete(self.skill.id).then(function(data) {
              pnotifyService.success('Registro excluido com successo!');
              $state.go('base.secured.skill.list');
            });
          }

      }
    ];
})();
