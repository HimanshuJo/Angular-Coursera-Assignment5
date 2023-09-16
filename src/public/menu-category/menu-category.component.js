(function () {
  "use strict";

  angular.module('public')
    .component('menuCategory', {
      template: '<div class="col-md-3 col-sm-4 col-xs-6 col-xxs-12">\
                  <a ui-sref="public.menuitems({category: $ctrl.category.short_name})">\
                    <div class="category-tile">\
                      <img width="200" height="200" ng-src="images/menu/{{$ctrl.category.short_name}}/{{$ctrl.category.short_name}}.jpg" alt="{{$ctrl.category.name}}">\
                      <span>{{$ctrl.category.name}}</span>\
                    </div>\
                  </a>\
                </div>',
      //templateUrl: 'src/public/menu-category/menu-category.html',
      bindings: {
        category: '<'
      }
    });

})();
