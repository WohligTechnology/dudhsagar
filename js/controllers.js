angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  TemplateService.footer = "views/section/footer.html";
  $scope.section = {
    one: "views/section/section1.html",
    two: "views/section/section2.html",
    three: "views/section/section3.html",
    four: "views/section/section4.html",
    five: "views/section/section5.html",
    // six: "views/section/footer.
  };
  $scope.changeFullPage = function(no) {
    console.log(no);
    $.fn.fullpage.moveTo(no);
  };

  //
  // $scope.$on('$viewContentLoaded', function() {
  //    $timeout(function() {
  //     $('.fullpage').fullpage();
  //
  //      console.log($stateParams.name);
  //      $scope.homeval = $stateParams.name;
  //      switch ($scope.homeval) {
  // 		  case "contact":
  //          $.fn.fullpage.moveTo(6);
  //          break;
  //        case "aboutus":
  //          $.fn.fullpage.moveTo(5);
  //          break;
  //        case "paneer":
  //          $.fn.fullpage.moveTo(4);
  //          break;
  //        case "dahi":
  //          $.fn.fullpage.moveTo(3);
  //          break;
  //        case "milk":
  //          $.fn.fullpage.moveTo(2);
  //          break;
  //        case "landing":
  //          $.fn.fullpage.moveTo(1);
  //          break;
  //        default:
  //          $.fn.fullpage.moveTo(1);
  //          break;
  //      }
  //    }, 1000);
  //  });


  $scope.changeFullPage = function(no) {
    console.log(no);
    $.fn.fullpage.moveTo(no);
  };


  $scope.$on('$viewContentLoaded', function() {
    $timeout(function() {
      $('.fullpage').fullpage();

      console.log($stateParams.name);
      $scope.homeval = $stateParams.name;
      switch ($scope.homeval) {
        //		  case "contact":
        //          $.fn.fullpage.moveTo(6);
        //          break;
        case "aboutus":
          $.fn.fullpage.moveTo(5);
          break;
        case "paneer":
          $.fn.fullpage.moveTo(4);
          break;
        case "dahi":
          $.fn.fullpage.moveTo(3);
          break;
        case "milk":
          $.fn.fullpage.moveTo(2);
          break;
        case "landing":
          $.fn.fullpage.moveTo(1);
          break;
        default:
          $.fn.fullpage.moveTo(1);
          break;
      }
    }, 1000);
  });

  $scope.abtimages = [
    "img/about.jpg",
    "img/about.jpg",
    "img/about.jpg",
    "img/about.jpg",
    "img/about.jpg"
  ];
})

.controller('AboutusCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("aboutus");
  $scope.menutitle = NavigationService.makeactive("Aboutus");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('ContactusCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("contactus");
  $scope.menutitle = NavigationService.makeactive("Contactus");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.submitform = function(formenquire, formvalid) {
    if (formenquire.$valid) {
      $scope.formComplete = true;
    }
  };
})

.controller('DahiCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("dahi");
  $scope.menutitle = NavigationService.makeactive("Dahi");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('MilkCtrl', function($scope, $state, TemplateService, NavigationService, $timeout, $stateParams, $document, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("milk");
    $scope.menutitle = NavigationService.makeactive("Milk");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.milkslider = [
      "img/products/milk_pack.png",
      "img/products/milk_pack.png",
      "img/products/milk_pack.png",
      "img/products/milk_pack.png"
    ];

    var myid = 'classic';

    function forMilkProduct(id) {
      if (!_.isEmpty(id) && id == "slim") {
        // Slim JSON
        myid = 'slim';
        $scope.milkJSON = {
          image: 'img/milk-slim.png',
          title: 'Slim',
          subtitle: 'Slim Milk',
          desc: 'With the richness of balanced cream and milk, Adya\'s Classic standardised milk is rich in proteins and calcium to help build strong bones!',
          table: [{
            property: '',
            value: ''
          }],
          available: [{
            property: '',
            value: ''
          }],
          variants: [{
            image: 'img/products/pack_milk.png',
            url: 'classic'
          }, {
            image: 'img/milk-nourish.png',
            url: 'nourish'
          }, {
            image: 'img/milk-health.png',
            url: 'health'
          }]
        };
      } else if (!_.isEmpty(id) && id == "nourish") {
        myid = 'nourish';
        $scope.milkJSON = {
          image: 'img/milk-nourish.png',
          title: 'Nourish',
          subtitle: 'Nourished Milk',
          desc: 'With the richness of balanced cream and milk, Adya\'s Classic standardised milk is rich in proteins and calcium to help build strong bones!',
          table: [{
            property: '',
            value: ''
          }],
          available: [{
            property: '',
            value: ''
          }],
          variants: [{
            image: 'img/milk-slim.png',
            url: 'slim'
          }, {
            image: 'img/products/pack_milk.png',
            url: 'classic'
          }, {
            image: 'img/milk-health.png',
            url: 'health'
          }]
        };
      } else if (!_.isEmpty(id) && id == "health") {
        myid = 'health';
        $scope.milkJSON = {
          image: 'img/milk-health.png',
          title: 'Health',
          subtitle: 'Helathy Milk',
          desc: 'With the richness of balanced cream and milk, Adya\'s Classic standardised milk is rich in proteins and calcium to help build strong bones!',
          table: [{
            property: '',
            value: ''
          }],
          available: [{
            property: '',
            value: ''
          }],
          variants: [{
            image: 'img/milk-slim.png',
            url: 'slim'
          }, {
            image: 'img/milk-nourish.png',
            url: 'nourish'
          }, {
            image: 'img/products/pack_milk.png',
            url: 'classic'
          }]
        };
      } else if (!_.isEmpty(id) && id == "classic") { // default classic
        myid = 'classic';
        $scope.milkJSON = {
          image: 'img/products/pack_milk.png',
          title: 'Classic',
          subtitle: 'Standardized Milk',
          desc: 'With the richness of balanced cream and milk, Adya\'s Classic standardised milk is rich in proteins and calcium to help build strong bones!',
          table: [{
            property: '',
            value: ''
          }],
          available: [{
            property: '',
            value: ''
          }],
          variants: [{
            image: 'img/milk-slim.png',
            url: 'slim'
          }, {
            image: 'img/milk-nourish.png',
            url: 'nourish'
          }, {
            image: 'img/milk-health.png',
            url: 'health'
          }]
        };
      }
    }

    $scope.changeURL = function(id) {
      $state.transitionTo('milkproduct', {
        id: id
      }, {
        notify: false
      });
      myid = id;
      $location.replace();
      forMilkProduct(id);
    };
    forMilkProduct(myid);

  })
  .controller('PaneerCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("paneer");
    $scope.menutitle = NavigationService.makeactive("Paneer");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })
  .controller('PlantCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("plant");
    $scope.menutitle = NavigationService.makeactive("Plant");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.plantslider = [
      "../img/plant/plant1.jpg",
      "../img/plant/plant2.jpg",
      "../img/plant/plant3.jpg",
      "../img/plant/plant4.jpg"
    ];
  })

  .controller('CareersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("careers");
    $scope.menutitle = NavigationService.makeactive("Careers");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
  })

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.showme = "menu-out";
  $scope.getnav = function() {
    if ($scope.showme == "menu-out") {
      $scope.showme = "menu-in";
      $scope.changeColor = "change-me";
    }
    else {
      $scope.showme = "menu-out";
      $scope.changeColor = "";
    }
  };
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    console.log(fromState);
    console.log("fromState");
    if (toState.url == "/home" && fromState.url != "^") {
      location.reload();
    }
    $(window).scrollTop(0);
    $("body > .loader").hide();
    $("body > .loadedContent").fadeIn(1000);
    $("body").css("overflow", "scroll");
  });

});
