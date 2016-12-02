(function () {
    'use strict';

    module.exports = [
      '$state',
      'loginService',
      'pnotifyService',
      function YmLoginController($state, loginService, pnotifyService) {
          var self = this;

          self.user = {};

          self.doLogin = function() {
            loginService.login(self.user).then(function(data) {
              $state.go('base.secured.project.list');
            }, function(err) {
              if ([400, 404].indexOf(err.status) >= 0) {
                pnotifyService.error('Usuário e/ou senha inválidos.');
              }
            })
          }
      }
    ];
})();
