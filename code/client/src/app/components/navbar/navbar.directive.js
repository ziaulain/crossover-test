(function() {
  'use strict';

  angular
    .module('ppulse')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($window, $scope, $log, $state, authService, toastr, $location, $anchorScroll) {
      var vm = this,
          user = angular.copy(authService.getUser());


      // Logout method
      vm.logout = function() {
        authService.logout(user.sessionId).then(function(res){
            $state.go('login');
        }).catch(function(err){
          $log.log(err);
        });
      };
      
    }
  }

})();
