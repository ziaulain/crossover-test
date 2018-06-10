(function() {
  'use strict';

  angular
    .module('ppulse')
    .directive('videoPlayer', videoPlayer);

  /** @ngInject */
  function videoPlayer ($document) {

      return {
          restrict: 'A',
          link: function (scope, element, attrs) {
              element.bind('playing', function(event) {
                  var doc = angular.element(document.querySelectorAll('video'));
                  for(var i = 0; i < doc.length; i++){
                    // Pausing reset of the videos 
                    if(this.id !== doc[i].id){
                        doc[i].pause();
                    }
                  }
              });
          }
      };
  }


})();
