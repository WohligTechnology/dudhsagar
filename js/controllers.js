angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "";
    TemplateService.footer = "";
})

.controller('AboutusCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("aboutus");
    $scope.menutitle = NavigationService.makeactive("Aboutus");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ContactusCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("contactus");
    $scope.menutitle = NavigationService.makeactive("Contactus");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('DahiCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("dahi");
    $scope.menutitle = NavigationService.makeactive("Dahi");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('MilkCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("milk");
        $scope.menutitle = NavigationService.makeactive("Milk");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.milkslider = [
      "../img/products/milk_pack.png",
      "../img/products/milk_pack.png",
      "../img/products/milk_pack.png",
      "../img/products/milk_pack.png"
    ];
    })
    .controller('PaneerCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("paneer");
        $scope.menutitle = NavigationService.makeactive("Paneer");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('PlantCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
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

.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.showme = "menu-out";
    $scope.getnav = function () {
        if ($scope.showme == "menu-out")
            $scope.showme = "menu-in";
        else
            $scope.showme = "menu-out";
    }
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });

});
