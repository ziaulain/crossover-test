(function() {
  'use strict';

  angular
    .module('ppulse')
    .controller('VideoDetailsController', VideoDetailsController);

  /** @ngInject */
  function VideoDetailsController(authService, videoService, $stateParams, errorService) {
    var vm = this,
        user = angular.copy(authService.getUser()),
        randomVideoIndex = Math.floor(Math.random() * 20) + 1;

    vm.errorService = errorService;

    // Get video by Video Id
    videoService.getVideo(user.sessionId, $stateParams.videoId).then(function(res){
      vm.video = res.data.data;
    }).catch(function(error){
      vm.errorService.handle(error);
    });


    // Get Recommended videos
    videoService.getVideoListing(user.sessionId, randomVideoIndex, 3).then(function(res){
      vm.videos = res.data.data;
    }).catch(function(error){
      vm.errorService.handle(error);
    });

  }
})();
