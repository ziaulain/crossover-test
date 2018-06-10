(function() {
  'use strict';

  angular
    .module('ppulse')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(authService, videoService, $state, $localStorage, errorService) {
    var vm = this,
        user = authService.getUser(),
        lazyload = 0,
        numberOfVideos = 12;

    vm.errorService = errorService;
    vm.loadMore = loadMore;
    vm.loading = true;
    vm.videos = [];

    getVideoListing();

    function getVideoListing() {
      vm.loading = true;
      console.log(user.sessionId);
      videoService.getVideoListing(user.sessionId, lazyload*numberOfVideos, numberOfVideos).then(function(res){
        vm.videos = vm.videos.concat(res.data.data);
        vm.loading = false;
      }).catch(function(error){
        vm.loading = false;
        vm.errorService.handle(error);
      });
    }

    function loadMore() {
      lazyload++;
      getVideoListing();
    }

  }
})();
