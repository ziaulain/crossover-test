(function() {
  'use strict';

  angular
    .module('ppulse')
    .run(runBlock);

  /** @ngInject */
  function runBlock($window, $log, authService, $location, config, $http, $state, $rootScope, $anchorScroll) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        var user = angular.copy(authService.getUser());
        // Rdirect user if session not found
        if(!user && toState.name !== 'login') {
          event.preventDefault();
          $state.go('login');

        } else if(user && toState.name === 'login'){
          $state.go('home');
        }
        $anchorScroll();
    });

  }

})();
