(function () {

  "use strict";

  angular.module('public')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['MenuService']
  function RegistrationController(MenuService) {
    var reg = this;
    MenuService.validateShortName();
    reg.shortNameMp = MenuService.validateShortName();
    
    reg.checkShortName=function(shortname){
      console.log("shortname is: ", shortname);
      console.log("array here is: ", reg.shortNameMp);
      for(let i=0; i<reg.shortNameMp.length; ++i){
        if(reg.shortNameMp[i]===shortname) return true;
      }
      return false;
    }
    
    reg.submit = function () {
      console.log("here!!");
      reg.completed = true;
    };

    reg.checkValidation = function (argum) {
      console.log("here2!!", argum);
      reg.flag = false;
      reg.validateShortName(argum);
      if (gb_flag === true) {
        reg.flag = true;
      }
      return reg.flag;
    }
  }

})();
