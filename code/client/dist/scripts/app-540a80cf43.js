!function(){"use strict";angular.module("ppulse",["ngAnimate","ngCookies","ngMaterial","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","ngStorage"])}(),function(){"use strict";function e(e,o,i){var n=this,t=angular.copy(e.getUser()),a=Math.floor(20*Math.random())+1;o.getVideo(t.sessionId,i.videoId).then(function(e){n.video=e.data.data})["catch"](function(e){console.log(e)}),o.getVideoListing(t.sessionId,a,3).then(function(e){n.videos=e.data.data})["catch"](function(e){console.log(e)})}e.$inject=["authService","videoService","$stateParams"],angular.module("ppulse").controller("VideoDetailsController",e)}(),function(){"use strict";function e(e,o,i,n,t,a,r,s){function d(){c.processing=!0,t.login(c.credentials).success(function(e){c.processing=!1,e.error?c.errorMsg=e.error:(t.setUser(e),i.go("home"))}).error(function(e){o.log(e)})}function l(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),c.classAnimation=""}var c=this;c.showToastr=l,c.login=d,c.processing=!1,c.errorMsg="",c.credentials={}}e.$inject=["toastr","$log","$state","$stateParams","authService","$mdDialog","config","$timeout"],angular.module("ppulse").controller("LoginController",e)}(),function(){"use strict";function e(e,o,i){function n(){o.getVideoListing(r.sessionId,s*d,d).then(function(e){a.videos=a.videos.concat(e.data.data)})["catch"](function(e){console.log(e)})}function t(){s++,n()}var a=this,r=angular.copy(e.getUser()),s=0,d=12;a.loadMore=t,a.videos=[],n()}e.$inject=["authService","videoService","$state"],angular.module("ppulse").controller("HomeController",e)}(),function(){angular.module("ppulse").service("videoService",["$http","config",function(e,o){this.getVideoListing=function(i,n,t){var a={method:"GET",url:o.apiUrl+"/videos?sessionId="+i+"&skip="+n+"&limit="+t};return e(a)},this.getVideo=function(i,n){var t={method:"GET",url:o.apiUrl+"/video?sessionId="+i+"&videoId="+n};return e(t)},this.rateVideo=function(i,n,t){var a={method:"POST",data:{videoId:n,rating:t},url:o.apiUrl+"/video/ratings?sessionId="+i};return e(a)}}])}(),function(){angular.module("ppulse").service("authService",["$http","config","$localStorage",function(e,o,i){this.login=function(i){return e.post(o.apiUrl+"/user/auth",i)},this.logout=function(n){i.user=void 0;var t={method:"GET",url:o.apiUrl+"/user/logout?sessionId="+n};return e(t)},this.setUser=function(e){i.user=angular.copy(e)},this.getUser=function(){return i.user}}])}(),function(){"use strict";function e(e,o){function i(o,i,n,t,a,r,s,d){function l(){for(var e=0,o=0;o<c.rate.length;o++)e+=c.rate[o];c.avgRating=Math.floor(e/c.rate.length)}var c=this,v=angular.copy(a.getUser());c.avgRating=0,l(),c.rateVideo=function(o){e.rateVideo(v.sessionId,c.videoId,o+1).then(function(e){c.rate=e.data.data.ratings,l()})["catch"](function(e){console.log(e)})}}i.$inject=["$window","$scope","$log","$state","authService","toastr","$location","$anchorScroll"];var n={restrict:"E",templateUrl:"app/components/rating/rating.html",scope:{rate:"=",videoId:"="},controller:i,controllerAs:"vm",bindToController:!0};return n}e.$inject=["videoService","authService"],angular.module("ppulse").directive("rating",e)}(),function(){"use strict";function e(){function e(e,o,i,n,t,a,r,s){var d=this,l=angular.copy(t.getUser());d.logout=function(){t.logout(l.sessionId).then(function(e){n.go("login")})["catch"](function(e){i.log(e)})}}e.$inject=["$window","$scope","$log","$state","authService","toastr","$location","$anchorScroll"];var o={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return o}angular.module("ppulse").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){return{restrict:"A",link:function(e,o,i){o.bind("playing",function(e){for(var o=angular.element(document.querySelectorAll("video")),i=0;i<o.length;i++)this.id!==o[i].id&&o[i].pause()})}}}e.$inject=["$document"],angular.module("ppulse").directive("videoPlayer",e)}(),function(){"use strict";function e(e){return{restrict:"A",scope:{loadMore:"&"},link:function(o,i,n){var t=angular.element(e)[0].body,a=0,r=1,s=function(){var e=angular.copy(t.scrollTop);e>a&&(a=e,a>400*r&&(r++,o.loadMore()))};angular.element(e).on("scroll",s)}}}e.$inject=["$document"],angular.module("ppulse").directive("scroll",e)}(),function(){"use strict";function e(e,o,i,n,t,a,r,s,d){s.$on("$stateChangeStart",function(e,o,n,t,a){var s=angular.copy(i.getUser());s||"login"===o.name?s&&"login"===o.name&&r.go("home"):(e.preventDefault(),r.go("login")),d()})}e.$inject=["$window","$log","authService","$location","config","$http","$state","$rootScope","$anchorScroll"],angular.module("ppulse").run(e)}(),function(){"use strict";function e(e,o,i){e.state("login",{url:"/login",templateUrl:"app/main/login/login.html",controller:"LoginController",controllerAs:"vm"}).state("home",{url:"/home",templateUrl:"app/main/home/home.html",controller:"HomeController",controllerAs:"vm"}).state("videoDetails",{url:"/videoDetails/:videoId",templateUrl:"app/main/videoDetails/videoDetails.html",controller:"VideoDetailsController",controllerAs:"vm"}),o.otherwise("/home")}e.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("ppulse").config(e)}(),function(){"use strict";angular.module("ppulse").constant("moment",moment).constant("config",{apiUrl:"http://localhost:3000"})}(),function(){"use strict";function e(e,o,i){e.debugEnabled(!0),o.allowHtml=!0,o.timeOut=3e3,o.positionClass="toast-bottom-right",o.preventDuplicates=!1,o.progressBar=!1}e.$inject=["$logProvider","toastrConfig","config"],angular.module("ppulse").config(e)}(),angular.module("ppulse").run(["$templateCache",function(e){e.put("app/components/rating/rating.html",'<span><span class=rate-btn ng-repeat="r in [1,2,3,4,5] track by $index" ng-click=vm.rateVideo($index)><i class="fa fa-star" ng-class="$index < vm.avgRating ? \'star\' : \'gray-star\'"></i> </span></span>'),e.put("app/components/navbar/navbar.html",'<div class=navigation><nav class=header-bg><div class=navbar-header><!-- Header Logo --> <a class=navbar-brand ui-sref=home><span>Crossover Video Portal</span> </a><!-- Header Logo End --></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav navbar-right"><li class=dropdown><a href=javascript:void(0) class="dropbtn my-account">My Account</a><!-- Dropdown list links --><div class=dropdown-content><a ng-click=vm.logout()><i class="fa fa-sign-out"></i> &nbsp;Sign Out</a></div><!-- Dropdown list links End --></li></ul><!-- Home link --><ul class="nav navbar-nav navbar-right"><li ui-sref-active=active><a ui-sref=home><i class="fa fa-home"></i> Home</a></li></ul><!-- Home link End --></div></nav></div>'),e.put("app/main/login/login.html",'<div class="container-fluid login"><div class="row white-bg"><!-- Left Side Image --><div class="col-xs-5 slider-container"><h3>Without data you are just another person with an opinion</h3></div><!-- Left Side Image End --><div class="col-md-7 col-xs-12 login-container"><!-- Sign In Heading --><div class=signin-text>Sign In</div><!-- Sign In Heading End --><!-- Login Form --><form name=login class=input-area autocomplete=off novalidate><md-content class="md-no-momentum text-left"><!-- Username Input --><md-input-container class="md-icon-float md-block"><label>Username</label><input name=username ng-model=vm.credentials.username type=text required autocomplete=off><md-icon md-svg-src=./assets/images/person_icon.svg></md-icon><div ng-messages=login.username.$error multiple md-auto-hide=false><div ng-message=required>Username is required.</div></div></md-input-container><!-- Username Input End --><!-- Password Input --><md-input-container ng-hide=vm.forgotPassBool md-no-float="" class=md-block ng-class="{\'md-input-has-value\': vm.credentials.password!==undefined}"><label>Password</label><input name=pass ng-model=vm.credentials.password type=password required autocomplete=off><md-icon md-svg-src=./assets/images/pass-lock.svg></md-icon><div ng-messages=login.pass.$error multiple md-auto-hide=false><div ng-message=required>Password is required.</div></div></md-input-container><!-- Password Input End --></md-content><div class="col-xs-12 reduce-padding"><!-- Error message --><div class="col-xs-12 reduce-padding error incorrect-pass">{{vm.errorMsg}}</div><!-- Error message End --><!-- Sign In Button --> <button ng-disabled="login.username.$invalid || login.pass.$invalid" class="col-xs-12 signin-btn" ng-class="{\'signin-btn-processing\': vm.processing}" ng-click=vm.login()><span ng-show=!vm.processing>Sign In</span><md-progress-circular ng-hide=!vm.processing ng-disabled=!vm.processing class="md-hue-2 btn-spinner" md-diameter=20px></md-progress-circular></button><!-- Sign In Button End --></div></form><!-- Login Form End --></div></div></div>'),e.put("app/main/videoDetails/videoDetails.html",'<div class=fluid-container><!-- Navbar --><div><acme-navbar creation-date=vm.creationDate></acme-navbar></div><!-- Navbar End --><!-- Top header image --><div class="jumbotron text-center"><p>Our mission is to give everyone a voice and to show them the world</p></div><!-- Top header image End --><!-- Page Content --><div class="container videoDetails"><div class=row><!--  Main Video Container End --><div class="col-lg-7 col-md-8 col-sm-12 col-xs-12" ng-if=vm.video><!-- Video Container --><div class=video-container><!-- Html5 Video --><video id="{{\'video\'}}" video-player width=100% controls><source ng-src={{vm.video.url}} type=video/mp4><source ng-src={{vm.video.url}} type=video/ogg>Your browser does not support HTML5 video.</video><!-- Video Name --><div class=video-header>{{vm.video.name}}</div><!-- Video Rating --><rating class=rating rate=vm.video.ratings video-id=vm.video._id></rating><!-- Video Description --><div class=video-desc>{{vm.video.description}}</div></div><!-- Video Container End --></div><!-- Main Video Container End --><!-- Recommended Videos --><div class="col-lg-5 col-md-4 col-sm-12 col-xs-12"><!-- Recommended Heading --><div class=col-xs-12><b>Recommended</b></div><!-- Recommended Heading End --><!-- Recommended Videos --><div class=col-xs-12 ng-repeat="video in vm.videos"><!-- Video Container --><div class="col-xs-12 reduce-padding multi-video-container"><!-- Video --><div class="col-xs-6 reduce-padding"><video id="{{\'video\'+$index}}" video-player width=100% height=150px controls><source ng-src="{{\'http://localhost:3000/\'+video.url}}" type=video/mp4><source ng-src="{{\'http://localhost:3000/\'+video.url}}" type=video/ogg>Your browser does not support HTML5 video.</video></div><!-- Video End --><!-- Video Details --><div class=col-xs-6><div class=multi-video-header ui-sref="videoDetails({videoId: video._id})">{{video.name}}</div><rating rate=video.ratings video-id=video._id></rating><div class=multi-video-desc>{{video.description}}</div></div><!-- Video Details End --></div><!-- Video Container End --></div><!-- Recommended Videos End --></div><!--  Recommended Videos End --></div></div><!-- Page Content End --></div>'),e.put("app/main/home/home.html",'<div class=fluid-container><!-- Navbar --><div><acme-navbar></acme-navbar></div><!-- Navbar End --><!-- Top header Jumbotron --><div class="jumbotron text-center"><h1>CROSSOVER VIDEO PORTAL</h1><p>Crossover video portal will deliver an mazing speed and video quality.</p></div><!-- Top header Jumbotron End --><!-- Page Content --><div class="container home"><!-- Scroll Directive for lazyloading --><div class=row scroll load-more=vm.loadMore()><!-- NgRepeat Videos --><div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 reduce-padding" ng-repeat="video in vm.videos"><!-- Video Container --><div class=video-container><!-- Html5 Video --><video id="{{\'video\'+$index}}" video-player width=100% height=150px controls><source ng-src={{video.url}} type=video/mp4><source ng-src={{video.url}} type=video/ogg>Your browser does not support HTML5 video.</video><!-- Html5 Video End --><!-- Video Name --><div class=video-header ui-sref="videoDetails({videoId: video._id})">{{video.name}}</div><!-- Video Name End --><!-- Video rating --><rating class=rating rate=video.ratings video-id=video._id></rating><!-- Video rating End --><!-- Video Description --><div class=video-desc>{{video.description}}</div><!-- Video Description End --></div><!-- Video Container --></div><!-- NgRepeat Videos End --></div><!-- Scroll Directive for lazyloading End --></div><!-- Page Content End --></div>')}]);
//# sourceMappingURL=../maps/scripts/app-540a80cf43.js.map
