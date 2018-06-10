(function() {
  'use strict';

  angular
    .module('ppulse')
    .directive('scroll', scroll);

  /** @ngInject */
  function scroll ($document, $window) {

      return {
          restrict: 'A',
          scope: {
              loadMore: '&'
          },
          link: function (scope, element, attrs) {
              var trigger = function() {
                console.log($window.scrollY);
                if($window.scrollY + $window.innerHeight == $document.height()) {
                     scope.loadMore();
                 }
              };
              // Trigger on scroll for lazy loading
              angular.element($document).on('scroll', trigger);

              // scope.$on('$destroy', function () {
              //   angular.element($document).off('scroll', windowClick);
              // });

              scope.$on('$destroy', function(){
                  element.off('scroll');
              });
          }
      };
  }


})();
