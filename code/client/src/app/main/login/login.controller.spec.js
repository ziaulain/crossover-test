(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;

    beforeEach(module('ppulse'));
    beforeEach(inject(function(_$controller_, _$timeout_, _toastr_) {
      spyOn(_toastr_, 'info').and.callThrough();

      vm = _$controller_('LoginController');
      $timeout = _$timeout_;
      toastr = _toastr_;
    }));

    it('should login user ', function() {
      vm.credentials = {
        username: 'ali',
        password: '5f4dcc3b5aa765d61d8327deb882cf99'
      };
      vm.login();
      expect(vm.processing).toBeTruthy();
    });

  });
})();
