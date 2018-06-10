(function() {
  'use strict';

  angular
    .module('ppulse')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(toastr, $log, $state, $stateParams, authService, $mdDialog, config, $timeout, errorService) {
    var vm = this;

    vm.errorService = errorService;
    vm.login = login;

    vm.processing = false;
    vm.errorMsg = '';
    vm.credentials = {};

    function login() {
      vm.processing = true;
      authService.login(vm.credentials).success(function(res){
        vm.processing = false;
        if(res.error){
          vm.errorMsg = res.error;
        } else {
          authService.setUser(res);
          $state.go('home');
        }

      }).error(function(err){
        $log.log(err);
        vm.errorService.handle(error);
      });
    }


  }
})();
