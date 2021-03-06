var adminurl = "http://wohlig.co.in/adyabackend/index.php/json/";
// var adminurl = "http://localhost/adyabackend/index.php/json/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    link: "#/home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      link: "#/home"
    }]
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
     getCareer: function(callback) {
     $http.get(adminurl + 'getCareers').success(callback);
   },
    enquiry: function(enquiry, callback) {
      return $http({
        url: adminurl + "contactSubmit",
        method: "POST",
        data: {
          "name": enquiry.name,
          "number": enquiry.number,
          "email": enquiry.email,
          "msg": enquiry.msg
        },
        withCredentials: true
      }).success(callback);
    },
    getCareers: function (callback) {
      return $http({
        url: adminurl + "getCareers",
        method: "GET",
        withCredentials: true
      }).success(callback);
    }

  };
});
