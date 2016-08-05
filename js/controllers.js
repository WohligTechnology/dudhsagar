angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ngDialog'])
  .controller('PopLassiCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
    $scope.openLassi = function() {
      ngDialog.open({
        template: 'views/content/popup.html',
        className: 'ngdialog-theme-plain',
        scope: $scope
      });
    };

    //$scope.openLassi();
  })
  .controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, ngDialog) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.footer = "views/section/footer.html";
    TemplateService.header = "views/section/header.html";
    $scope.section = {
      one: "views/section/section1.html",
      two: "views/section/section2.html",
      three: "views/section/section3.html",
      four: "views/section/section4.html",
      five: "views/section/section5.html",
      seven: "views/section/section7.html"
    };



    $scope.value = true;

    $scope.$on('$viewContentLoaded', function() {
      $timeout(function() {
        $('.fullpage').fullpage();

        switch ($scope.homeval) {
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
      NavigationService.enquiry(formvalid, function(data) {
        $scope.formComplete = true;
      });
    }
  };
})

.controller('DahiCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("dahi");
  $scope.menutitle = NavigationService.makeactive("Dahi");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.section = {
    enquire: "views/content/enquiry.html"
  };
  $scope.formenquire = {};
  $scope.enquiry = function() {
    $scope.eback = "eeback";
    if ($scope.showme == "enquire-out") {
      $scope.showme = "enquire-in";
      $scope.ebutton = "";
      $scope.eback = "eeback";
    } else {
      $scope.showme = "enquire-out";
      $scope.ebutton = "ebutton";
      $scope.eback = "eback";
    }
  };
  $scope.submitform = function(formenquire, formvalid) {
    if (formenquire.$valid) {
      $scope.formComplete = true;
      NavigationService.enquiry(formvalid, function(data) {});
      $timeout(function() {
        $scope.showme = "enquire-in";
        $scope.ebutton = "";
        $scope.eback = "eeback";
      }, 3000);
      $timeout(function() {
        $scope.formComplete = false;
        $scope.formenquire = {};
      }, 3500);
    }
  };
})

.controller('LassiCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("lassi");
  $scope.menutitle = NavigationService.makeactive("Lassi");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.section = {
    enquire: "views/content/enquiry.html"
  };
  $scope.formenquire = {};
  $scope.enquiry = function() {
    $scope.eback = "eeback";
    if ($scope.showme == "enquire-out") {
      $scope.showme = "enquire-in";
      $scope.ebutton = "";
      $scope.eback = "eeback";
    } else {
      $scope.showme = "enquire-out";
      $scope.ebutton = "ebutton";
      $scope.eback = "eback";
    }
  };
  $scope.submitform = function(formenquire, formvalid) {
    if (formenquire.$valid) {
      $scope.formComplete = true;
      NavigationService.enquiry(formvalid, function(data) {});
      $timeout(function() {
        $scope.showme = "enquire-in";
        $scope.ebutton = "";
        $scope.eback = "eeback";
      }, 3000);
      $timeout(function() {
        $scope.formComplete = false;
        $scope.formenquire = {};
      }, 3500);
    }
  };
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
    $scope.formenquire = {};

    var myid = $stateParams.id;

    function forMilkProduct(id) {
      if (!id) {
        $state.go('milkproduct', {
          id: "classic"
        });
      } else {
        switch (id) {
          case "slim":
            $scope.milkJSON = {
              image: 'img/products/slim_pack.png',
              title: 'Slim',
              subtitle: 'Double Toned Milk',
              desc: 'Rich in protein with a very low fat content - an ideal milk for weight conscious people. Adya Slim helps to reduce cholesterol levels and keeps your heart healthy.',
              color: 'brand-slim',
              table: [{
                property: 'Energy',
                value: '45.9kcal'
              }, {
                property: 'Total Fat',
                value: '1.5g'
              }, {
                property: 'Total Carbohydrate',
                value: '5.0g'
              }, {
                property: 'Protein',
                value: '3.1g'
              }, {
                property: 'Added Sugar',
                value: '0g'
              }],
              prices: [{
                value: '500ml'
              }, {
                value: '1 litre'
              }],
              variants: [{
                image: 'img/products/pack_milk.png',
                url: 'classic'
              }, {
                image: 'img/products/nourish_pack.png',
                url: 'nourish'
              }, {
                image: 'img/products/health_pack.png',
                url: 'health'
              }]
            };
            break;
          case "nourish":
            $scope.milkJSON = {
              image: 'img/products/nourish_pack.png',
              title: 'Nourish',
              subtitle: 'Cow Milk',
              desc: 'The most natural milk which provides nourishment similar to that of Mother Cow. Adya Nourish provides a balanced mix of fat and protein contents.',
              color: 'brand-nourish',
              table: [{
                property: 'Energy',
                value: '63.6kcal'
              }, {
                property: 'Total Fat',
                value: '3.5g'
              }, {
                property: 'Total Carbohydrate',
                value: '4.7g'
              }, {
                property: 'Protein',
                value: '3.0g'
              }, {
                property: 'Added Sugar',
                value: '0g'
              }],
              prices: [{
                value: '200ml'
              }, {
                value: '500ml'
              }],
              variants: [{
                image: 'img/products/slim_pack.png',
                url: 'slim'
              }, {
                image: 'img/products/pack_milk.png',
                url: 'classic'
              }, {
                image: 'img/products/health_pack.png',
                url: 'health'
              }]
            };
            break;
          case "health":
            $scope.milkJSON = {
              image: 'img/products/health_pack.png',
              title: 'Health',
              subtitle: 'Toned Milk',
              desc: 'If you love the taste of milk but are wary of its fat content then go for Adya Health, which gives you a perfect blend of wholesome taste and nutrition.',
              color: 'brand-health',
              table: [{
                property: 'Energy',
                value: '57.8kcal'
              }, {
                property: 'Total Fat',
                value: '3.0g'
              }, {
                property: 'Total Carbohydrate',
                value: '4.7g'
              }, {
                property: 'Protein',
                value: '3.0g'
              }, {
                property: 'Added Sugar',
                value: '0g'
              }],
              prices: [{
                value: '500ml'
              }, {
                value: '1 litre'
              }],
              variants: [{
                image: 'img/products/slim_pack.png',
                url: 'slim'
              }, {
                image: 'img/products/nourish_pack.png',
                url: 'nourish'
              }, {
                image: 'img/products/pack_milk.png',
                url: 'classic'
              }]
            };
            break;
          default:
            $scope.milkJSON = {
              image: 'img/products/pack_milk.png',
              title: 'Classic',
              subtitle: 'Standardized Milk',
              desc: 'With the richness of taste and nutrition, Adya Classic consists of high protein and calcium which boosts our energy and builds strong bones!',
              color: 'brand-milk',
              table: [{
                property: 'Energy',
                value: '73kcal'
              }, {
                property: 'Total Fat',
                value: '4.5g'
              }, {
                property: 'Total Carbohydrate',
                value: '4.7g'
              }, {
                property: 'Protein',
                value: '3.0g'
              }, {
                property: 'Added Sugar',
                value: '0g'
              }],
              prices: [{
                value: '500ml'
              }, {
                value: '1 litre'
              }],
              variants: [{
                image: 'img/products/slim_pack.png',
                url: 'slim'
              }, {
                image: 'img/products/nourish_pack.png',
                url: 'nourish'
              }, {
                image: 'img/products/health_pack.png',
                url: 'health'
              }]
            };
            break;
        }
      }
    }
    forMilkProduct(myid);

    $scope.section = {
      enquire: "views/content/enquiry.html"
    };
    $scope.enquiry = function() {
      $scope.eback = "eeback";
      if ($scope.showme == "enquire-out") {
        $scope.showme = "enquire-in";
        $scope.ebutton = "";
        $scope.eback = "eeback";
      } else {
        $scope.showme = "enquire-out";
        $scope.ebutton = "ebutton";
        $scope.eback = "eback";
      }
    };
    $scope.submitform = function(formenquire, formvalid) {
      if (formenquire.$valid) {
        $scope.formComplete = true;
        NavigationService.enquiry(formvalid, function(data) {});
        $timeout(function() {
          $scope.showme = "enquire-in";
          $scope.ebutton = "";
          $scope.eback = "eeback";
        }, 3000);
        $timeout(function() {
          $scope.formComplete = false;
          $scope.formenquire = {};
        }, 3500);
      }
    };
  })
  .controller('PaneerCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("paneer");
    $scope.menutitle = NavigationService.makeactive("Paneer");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.formenquire = {};

    $scope.section = {
      enquire: "views/content/enquiry.html"
    };
    $scope.enquiry = function() {
      $scope.eback = "eeback";
      if ($scope.showme == "enquire-out") {
        $scope.showme = "enquire-in";
        $scope.ebutton = "";
        $scope.eback = "eeback";
      } else {
        $scope.showme = "enquire-out";
        $scope.ebutton = "ebutton";
        $scope.eback = "eback";
      }
    };
    $scope.submitform = function(formenquire, formvalid) {
      if (formenquire.$valid) {
        $scope.formComplete = true;
        NavigationService.enquiry(formvalid, function(data) {});
        $timeout(function() {
          $scope.showme = "enquire-in";
          $scope.ebutton = "";
          $scope.eback = "eeback";
        }, 3000);
        $timeout(function() {
          $scope.formComplete = false;
          $scope.formenquire = {};
        }, 3500);
      }
    };
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
  $scope.oneAtATime = true;

  NavigationService.getCareers(function(data) {

    console.log("data: ", data.data);
    $scope.careers = data.data;

  });
})

// .controller('PopupCtrl', function($scope, TemplateService, NavigationService, $timeout) {
//   //Used to name the .html file
//   $scope.template = TemplateService.changecontent("popup");
//   $scope.menutitle = NavigationService.makeactive("Popup");
//   TemplateService.title = $scope.menutitle;
//   $scope.navigation = NavigationService.getnav();
// })

.controller('headerctrl', function($scope, TemplateService, ngDialog) {
  $scope.template = TemplateService;
  $scope.showme = "menu-out";
  $scope.backme = "backmee";
  $scope.getnav = function(value) {
    if ($scope.showme == "menu-out") {
      if (value == 1) {
        $scope.showme = "menu-in";
        $scope.changeColor = "change-me";
        $scope.backme = "backme";
      } else {}
    } else {
      if (value === 1 || value === 0) {
        $scope.showme = "menu-out";
        $scope.changeColor = "";
        $scope.backme = "backmee";
      }
    }
  };
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

    if (toState.url == "/home" && fromState.url != "^") {
      location.reload();
    }
    $(window).scrollTop(0);
    $("body > .loader").hide();
    $("body > .loadedContent").fadeIn(1000);
    $("body").css("overflow", "scroll");
  });

});
