/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('ppulse')
    .constant('moment', moment)
    .constant('config', {
        apiUrl: 'http://localhost:3000'
    });

})();
