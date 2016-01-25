// JavaScript Document
var controller = new ScrollMagic.Controller();
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
    ]);

firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

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

    .state('paneer', {
        url: "/paneer",
        templateUrl: "views/template.html",
        controller: 'PaneerCtrl'
    })

    .state('plant', {
        url: "/plant",
        templateUrl: "views/template.html",
        controller: 'PlantCtrl'
    })
    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});


firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      $element.css("min-height", windowHeight);
      setTimeout(function() {
        $element.css("min-height", windowHeight);
      }, 1500);
    }
  };
});

var taxiAni = true;
var taxiAni2 = true;
var taxiAni3 = true;
firstapp.directive('taxi', function ($compile, $parse) {
	return {
		restrict: 'EA',
		replace: false,
		link: function ($scope, element, attrs) {
      new ScrollMagic.Scene({triggerElement: ".taxiAnimation", duration: 200})
                .addTo(controller)
//                .addIndicators() // add indicators (requires plugin)
                .on("enter", function (e) {
                  console.log("Taxi Enter");
                  setTimeout(function() {
                    taxiAni = true;
                  }, 5000);
                  if(taxiAni == true)
                  {
                    $(".taxiAnimation").attr("src","img/home/milk-section.gif");
					  taxiAni = false;
                  }                 
                })    
	  new ScrollMagic.Scene({triggerElement: ".taxiAnimation2", duration: 400})
                .addTo(controller)
//                .addIndicators() // add indicators (requires plugin)
                .on("enter", function (e) {
                  console.log("Taxi Enter");
//                  setTimeout(function() {
                    taxiAni2 = true;
//                  }, 5000);              
		  		if(taxiAni2 == true)
                  {
                    $(".taxiAnimation2").attr("src","img/home/dahi-section.gif");
					  taxiAni2 = false;
                  }                  
                })     
	  new ScrollMagic.Scene({triggerElement: ".taxiAnimation3", duration: 400})
                .addTo(controller)
//                .addIndicators() // add indicators (requires plugin)
                .on("enter", function (e) {
                  console.log("Taxi Enter");
//                  setTimeout(function() {
                    taxiAni3 = true;
//                  }, 5000);                 
		  		if(taxiAni3 == true)
                  {
                    $(".taxiAnimation3").attr("src","img/home/paneer-section.gif");
					  taxiAni3 = false;
                  }
                })
	  		
		}
	};
});

