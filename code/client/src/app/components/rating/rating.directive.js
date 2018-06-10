(function() {
  'use strict';

  angular
    .module('ppulse')
    .directive('rating', rating);

  /** @ngInject */
  function rating(videoService, authService) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/rating/rating.html',
      scope: {
          rate: '=',
          videoId: '='
      },
      controller: RatingController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function RatingController($scope, $log, $state, authService, toastr) {
      var vm = this,
          user = angular.copy(authService.getUser());
        vm.avgRating = 0;

        caculateAvgRate();

        // Rate Video method
        vm.rateVideo = function(index) {
          videoService.rateVideo(user.sessionId, vm.videoId, index+1).then(function(res){
            vm.rate = res.data.data.ratings;
            caculateAvgRate();
            toastr.success('Video rating saved successfully!');
          }).catch(function(error){
            console.log(error);
          });
        };

        // Calculating Average and rounding off with floor to display number of stars
        function caculateAvgRate() {
          var sum = 0;
          for(var i = 0;i < vm.rate.length;i++){
            sum += vm.rate[i];
          }
          vm.avgRating = Math.floor(sum/vm.rate.length);
        }
    }
  }

})();
