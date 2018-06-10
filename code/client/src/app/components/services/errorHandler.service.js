(function () {
  angular.module('ppulse')
    .service('errorService', function ($http, config, toastr, $state, authService) {

      this.handle = function(err) {
        if(err.status === -1){
          toastr.error('Lost connection to server!');
        } else {
          if(error.statusText === 'Unauthorized'){
            authService.setUser(undefined);
            $state.go('login');
          } else {
            toastr.error(err.data.error);
          }
        }
      };

    });
})();
