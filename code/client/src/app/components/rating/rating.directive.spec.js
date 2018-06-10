(function() {
  'use strict';

  /**
   * @todo Complete the test
   * This example is not perfect.
   * Test should check if MomentJS have been called
   */
  describe('directive rating', function() {
    // var $window;
    var vm;
    var el;
    var authService;
    var videoService;

    beforeEach(module('ppulse'));
    beforeEach(inject(function($compile, $rootScope, _authService_, _videoService_) {

      spyOn(_authService_, 'getUser').and.callFake(function () {
        return {"status":"success","sessionId":"a8t9Rr9bjWD2InfeFLbNS3FNg5mnFqiV","username":"ali"};
      });

      spyOn(_videoService_, 'rateVideo').and.callFake(function () {
        return {"data": {"data": {"rating":[3,4,1,2,3,5]}}};
      });

      el = angular.element('<rating class="rating" rate="[3,4,1,2,3]" video-id="\'594f8cedd0762bcc1ba80e8c\'"></rating>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;

      authService = _authService_;
      videoService = _videoService_;

    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
      expect(el.html()).toContain('<i class="fa fa-star star" ng-class="$index &lt; vm.avgRating ? \'star\' : \'gray-star\'"></i>');
      expect(el.html()).toContain('<i class="fa fa-star gray-star" ng-class="$index &lt; vm.avgRating ? \'star\' : \'gray-star\'"></i>');
    });

    it('should have isolate scope object with instanciate members', function() {
      expect(vm).toEqual(jasmine.any(Object));
    });

    it('average rating should be 2', function() {
      expect(vm.avgRating).toEqual(2);
    });

  });
})();
