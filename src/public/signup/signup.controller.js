(function () {

  "use strict";

  angular.module('public')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['MenuService', '$window']
  function RegistrationController(MenuService, $window) {
    var reg = this;
    reg.shortNameMp = MenuService.validateShortName();

    reg.setUserName = function (curname) {
      $window.localStorage.setItem('username', curname);
    }

    reg.setLastName = function (curlastname) {
      $window.localStorage.setItem('lastname', curlastname);
    }

    reg.setEmail = function (curemail) {
      $window.localStorage.setItem('email', curemail);
    }

    reg.setPhone = function (curphone) {
      $window.localStorage.setItem('phone', curphone);
    }

    reg.isShortNameEmpty=function(shortname){
      return shortname===''||shortname===undefined||shortname===null;
    }

    reg.checkShortName = function (shortname) {
      let curflag = false;
      for (let i = 0; i < reg.shortNameMp.length; ++i) {
        if (reg.shortNameMp[i] === shortname) {
          curflag = true;
        }
      }
      if (curflag === true) {
        reg.favMenu = MenuService.getFavouriteMenu(shortname);
        $window.localStorage.setItem('description', reg.favMenu.description);
        $window.localStorage.setItem('large_portion_name', reg.favMenu.large_portion_name);
        $window.localStorage.setItem('favmenuName', reg.favMenu.name);
        $window.localStorage.setItem('price_large', reg.favMenu.price_large);
        $window.localStorage.setItem('short_name', reg.favMenu.short_name);
        $window.localStorage.setItem('small_portion_name', reg.favMenu.small_portion_name);
        reg.description = reg.favMenu.description;
        reg.large_portion_name = reg.favMenu.large_portion_name;
        reg.favmenuName = reg.favMenu.name;
        reg.price_large = reg.favMenu.price_large;
        reg.short_name = reg.favMenu.short_name;
        reg.small_portion_name = reg.favMenu.small_portion_name;
        return true;
      }
      return false;
    }

    reg.submit = function () {
      reg.completed = true;
    };

    reg.getValue = function () {
      let data = [];
      data.push($window.localStorage.getItem('username'));
      data.push($window.localStorage.getItem('lastname'));
      data.push($window.localStorage.getItem('email'));
      data.push($window.localStorage.getItem('phone'));
      data.push($window.localStorage.getItem('description'));
      data.push($window.localStorage.getItem('large_portion_name'));
      data.push($window.localStorage.getItem('favmenuName'));
      data.push($window.localStorage.getItem('price_large'));
      data.push($window.localStorage.getItem('short_name'));
      data.push($window.localStorage.getItem('small_portion_name'));
      return data;
    }
  }

})();
