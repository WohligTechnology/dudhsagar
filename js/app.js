// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, ngDialogProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider

    .state('home', {
    url: "/home",
    templateUrl: "views/template-home.html",
    controller: 'HomeCtrl'
  })

  .state('aboutus', {
    url: "/aboutus",
    templateUrl: "views/template.html",
    controller: 'AboutusCtrl'
  })

  .state('contactus', {
    url: "/contactus",
    templateUrl: "views/template.html",
    controller: 'ContactusCtrl'
  })

  .state('popup', {
    url: "/popup",
    templateUrl: "views/template.html",
    controller: 'PopupCtrl'
  })

  .state('dahi', {
    url: "/dahi",
    templateUrl: "views/template.html",
    controller: 'DahiCtrl'
  })

  .state('milk', {
    url: "/milk",
    templateUrl: "views/template.html",
    controller: 'MilkCtrl'
  })

  .state('milkproduct', {
    url: "/milk/:id",
    templateUrl: "views/template.html",
    controller: 'MilkCtrl'
  })

  .state('paneer', {
    url: "/paneer",
    templateUrl: "views/template.html",
    controller: 'PaneerCtrl'
  })

  .state('lassi', {
    url: "/lassi",
    templateUrl: "views/template.html",
    controller: 'LassiCtrl'
  })

  .state('ghee', {
    url: "/ghee",
    templateUrl: "views/template.html",
    controller: 'GheeCtrl'
  })

  // .state('plant', {
  //   url: "/plant",
  //   templateUrl: "views/template.html",
  //   controller: 'PlantCtrl'
  // })

  .state('careers', {
    url: "/careers",
    templateUrl: "views/template.html",
    controller: 'CareersCtrl'
  });
  $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function ($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function ($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function () {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive("scroll", function ($window) {
  return function (scope, element, attrs) {
    angular.element($window).bind("scroll", function () {
      var windowHeight = $(window).height();
      if (this.pageYOffset >= windowHeight) {
        // console.log(windowHeight);
        element.addClass('affix');
      } else {
        element.removeClass('affix');
      }
    });
  };
});

firstapp.directive('autoHeight', function ($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function ($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      $element.css("min-height", windowHeight);
      setTimeout(function () {
        $element.css("min-height", windowHeight);
      }, 1500);
    }
  };
});