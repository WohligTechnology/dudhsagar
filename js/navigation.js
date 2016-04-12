var adminurl = "http://wohlig.co.in/adyabackend/index.php/json/";
//var adminurl = "http://192.168.0.123/adyabackend/index.php/json/";

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
    enquiry: function(enquiry, callback) {
      return $http({
        url: adminurl + "contactSubmit",
        method: "POST",
        data: {
          "name": enquiry.name,
          "number": enquiry.number,
          "email": enquiry.email,
          "msg": enquiry.msg
        }
      }).success(callback);
    }

  };
});
