(function () {
  angular.module('ppulse')
    .service('authService', function ($http, config,$sessionStorage) {
      var user = {};
      this.login = function (credentials) {
        return $http.post(config.apiUrl + '/user/auth', credentials);
      };

      this.logout = function (sessionId) {
        $sessionStorage.user = undefined;
        var req = {
          method: 'GET',
          url: config.apiUrl + '/user/logout?sessionId='+sessionId
        };
        return $http(req);
      };

      this.setUser = function(userDetails) {
        $sessionStorage.user = userDetails;
      };

      this.getUser = function() {
        return $sessionStorage.user;
      };
    });
})();
