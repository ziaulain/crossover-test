(function() {
  'use strict';

  angular
    .module('ppulse')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/main/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('videoDetails', {
        url: '/videoDetails/:videoId',
        templateUrl: 'app/main/videoDetails/videoDetails.html',
        controller: 'VideoDetailsController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/home');

  }

})();
