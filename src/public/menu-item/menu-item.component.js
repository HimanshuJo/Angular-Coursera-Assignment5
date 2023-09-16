(function () {
  "use strict";

  angular.module('public')
    .component('menuItem', {
      //templateUrl: 'src/public/menu-item/menu-item.html',
      template: '<div class="menu-item-tile col-md-6">\
                  <div class="row">\
                    <div class="col-sm-5">\
                      <div class="menu-item-photo">\
                        <div>{{$ctrl.menuItem.short_name}}</div>\
                        <img class="img-responsive" width="250" height="150"\
                          ng-src="images/menu/{{$ctrl.categoryShortName}}/{{$ctrl.menuItem.short_name}}.jpg"\
                          alt="{{$ctrl.menuItem.name}}">\
                      </div>\
                      <div class="menu-item-price">{{$ctrl.menuItem.price_small | currency}}<span>\
                          {{$ctrl.menuItem.small_portion_name}}</span> {{$ctrl.menuItem.price_large | currency}}\
                        <span>{{$ctrl.menuItem.large_portion_name}}</span></div>\
                    </div>\
                    <div class="menu-item-description col-sm-7">\
                      <h3 class="menu-item-title">{{$ctrl.menuItem.name}}</h3>\
                      <p class="menu-item-details">{{$ctrl.menuItem.description}}</p>\
                    </div>\
                  </div>\
                  <hr class="visible-xs">\
                </div>',
      bindings: {
        menuItem: '<',
        categoryShortName: '<'
      }
    });

})();
