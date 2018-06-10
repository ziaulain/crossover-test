(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;
    var authService;

    beforeEach(module('ppulse'));
    beforeEach(inject(function(_$controller_, _$timeout_, _toastr_, _authService_) {
      spyOn(_toastr_, 'info').and.callThrough();

      spyOn(_authService_, 'getUser').and.callFake(function () {
        var user = {"status":"success","sessionId":"a8t9Rr9bjWD2InfeFLbNS3FNg5mnFqiV","username":"ali"};
        return user;
      });

      vm = _$controller_('VideoDetailsController');
      $timeout = _$timeout_;
      toastr = _toastr_;
      authService = _authService_;
    }));

    it('User should be logged in', function() {
      var user = authService.getUser();
      expect(user).toBeDefined();
    });

  });
})();
