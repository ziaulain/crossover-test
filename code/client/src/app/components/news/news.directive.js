(function() {
  'use strict';

  angular
    .module('ppulse')
    .directive('news', news);

  /** @ngInject */
  function news(videoService, authService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/news/news.html',
      scope: {
          news: '='
      },
      controller: newsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function newsController($scope, $log, $state, authService, toastr) {
      var vm = this;
      console.log($scope.news);
    }
  }

})();
