(function () {
  'use strict';

  angular.module('public')
    .config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];
  function routeConfig($stateProvider) {
    // Routes
    $stateProvider
      .state('public', {
        abstract: true,
        //templateUrl: 'src/public/public.html'
        template: '<!--\
                    Include stylesheet specific to the public site\
                  -->\
                  <link rel="stylesheet" href="css/public.css">\
                  \
                  <ui-view></ui-view>\
                  '
      })
      .state('public.home', {
        url: '/',
        //templateUrl: 'src/public/home/home.html'
        template: '<div id="main-content" class="container">\
                    <div class="jumbotron">\
                      <img src="images/jumbotron_768.jpg" alt="Picture of restaurant" class="img-responsive visible-xs">\
                    </div>\
                    <div id="home-tiles" class="row">\
                      <div class="col-md-4 col-sm-6 col-xs-12">\
                        <a ui-sref="public.menu"><div id="menu-tile"><span>menu</span></div></a>\
                      </div>\
                      <div class="col-md-4 col-sm-6 col-xs-12">\
                        <a ui-sref="public.menuitems({category: \'SP\'})">\
                          <div id="specials-tile"><span>specials</span></div>\
                        </a>\
                      </div>\
                      <div class="col-md-4 col-sm-12 col-xs-12">\
                        <a href="https://www.google.com/maps/place/David+Chu\'s+China+Bistro/@39.3635874,-76.7138622,17z/data=!4m6!1m3!3m2!1s0x89c81a14e7817803:0xab20a0e99daa17ea!2sDavid+Chu\'s+China+Bistro!3m1!1s0x89c81a14e7817803:0xab20a0e99daa17ea" target="_blank">\
                          <div id="map-tile">\
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675372390488!2d-76.71386218529199!3d39.3635874269356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid+Chu&#39;s+China+Bistro!5e0!3m2!1sen!2sus!4v1452824864156" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>\
                            <span>map</span>\
                          </div>\
                        </a>\
                      </div>\
                    </div>\
                  </div>'
      })
      .state('public.menu', {
        url: '/menu',
        //templateUrl: 'src/public/menu/menu.html',
        template: '<div class="container">\
                    <h2 id="menu-categories-title" class="text-center">Menu Categories</h2>\
                    <div class="text-center">\
                      Substituting white rice with brown rice or fried rice after 3:00pm will be $1.50 for a pint and $2.50 for a quart.\
                    </div>\
                    <menu-category ng-repeat="menuCategory in menuCtrl.menuCategories"\
                                  category="menuCategory">\
                    </menu-category>\
                  </div>',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        resolve: {
          menuCategories: ['MenuService', function (MenuService) {
            return MenuService.getCategories();
          }]
        }
      })
      .state('public.menuitems', {
        url: '/menu/{category}',
        //templateUrl: 'src/public/menu-items/menu-items.html',
        template: '<div class="container">\
                    <h2 id="menu-categories-title" class="text-center">\
                      {{ menuItemsCtrl.menuItems.category.name}} Menu\
                    </h2>\
                    <div class="text-center">\
                      {{ menuItemsCtrl.menuItems.category.special_instructions}}\
                    </div>\
                    <menu-item ng-repeat="menuItem in menuItemsCtrl.menuItems.menu_items"\
                              menu-item="menuItem"\
                              category-short-name="menuItemsCtrl.menuItems.category.short_name">\
                    </menu-item>\
                  </div>',
        controller: 'MenuItemsController',
        controllerAs: 'menuItemsCtrl',
        resolve: {
          menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
            return MenuService.getMenuItems($stateParams.category);
          }]
        }
      });
  }
})();
