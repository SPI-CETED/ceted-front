module.exports = [
    '$rootScope',
    '$timeout',
    'loaderService',
  function YmLoaderController($rootScope, $timeout, loaderService) {
    loaderService.hide();

      $rootScope.$on('HTTP_REQUEST_START', function(data) {
          $timeout(function() {
              if ($rootScope.statusRequest === 1) {
                  loaderService.show();
              }
          }, 500);
      });

      $rootScope.$on('HTTP_REQUEST_END', function(data) {
          loaderService.hide();
      });
  }
];
