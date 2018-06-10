(function () {
  angular.module('ppulse')
    .service('videoService', function ($http, config) {

      this.getVideoListing = function (sessionId, skip, limit) {
        var req = {
          method: 'GET',
          url: config.apiUrl + '/videos?sessionId='+ sessionId + '&skip=' + skip + '&limit=' + limit
        };
        return $http(req);
      };

      this.getVideo = function (sessionId, videoId) {
        var req = {
          method: 'GET',
          url: config.apiUrl + '/video?sessionId='+ sessionId + '&videoId=' + videoId
        };
        return $http(req);
      };

      this.rateVideo = function (sessionId, videoId, rating) {
        var req = {
          method: 'POST',
          data: {
            "videoId": videoId,
            "rating": rating
          },
          url: config.apiUrl + '/video/ratings?sessionId='+ sessionId
        };
        return $http(req);
      };


    });
})();
