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
      .state('public.signup', {
        url: '/signup',
        template: '<h1 style="text-align: center;">Sign up for the newsletter</h1>\
                <div class="container" ng-controller="RegistrationController as reg">\
                  <fieldset>\
                    <legend style="color:black">Sign up form</legend>\
                    <form name="regForm" novalidate>\
                      <input style="background-color:black; \
                                    border: solid 1px #6E6E6E;\
                                    height: 30px; \
                                    font-size:18px; \
                                    margin-bottom: 5px;\
                      type="text" name="username" placeholder="First Name" ng-model="reg.currUser.username" required\
                        minlength="1" ng-maxlength="20">\
                      {{ reg.currUser.username }}\
                      {{reg.setUserName(reg.currUser.username)}}\
                      <span\
                        ng-if="(regForm.username.$error.minlength || regForm.username.$error.required) && regForm.username.$touched" style="color: red">\
                        Please make sure that \'First Name\' must be at least 1 character long\
                      </span>\
                      <span ng-if="regForm.username.$error.maxlength && regForm.username.$touched" style="color: red">\
                        Please make sure that \'First Name\' must not be longer than 20 characters\
                      </span>\
                      <br>\
                      <input style="background-color:black; \
                                    border: solid 1px #6E6E6E;\
                                    height: 30px; \
                                    font-size:18px; \
                                    margin-bottom: 5px;\
                      type="text" name="lastname" placeholder="Last Name" ng-model="reg.currUser.lastname" required\
                        minlength="1" ng-maxlength="20">\
                      {{ reg.currUser.lastname }}\
                      {{reg.setLastName(reg.currUser.lastname)}}\
                      <span\
                        ng-if="(regForm.lastname.$error.minlength || regForm.lastname.$error.required) && regForm.lastname.$touched" style="color: red">\
                        Please make sure that \'Last Name\' must be at least 1 character long\
                      </span>\
                      <span ng-if="regForm.lastname.$error.maxlength && regForm.lastname.$touched" style="color: red">\
                        Please make sure that \'Last Name\' must not be longer than 20 characters\
                      </span>\
                      <br>\
                      <input  style="background-color:black; \
                              border: solid 1px #6E6E6E;\
                              height: 30px; \
                              font-size:18px; \
                              margin-bottom: 5px;\
                      type="email" name="email" placeholder="Email" ng-model="reg.currUser.email" required>\
                      {{ reg.currUser.email }}\
                      {{reg.setEmail(reg.currUser.email)}}\
                      <span ng-if="regForm.email.$invalid && regForm.email.$touched" style="color: red">\
                        Please make sue that \'Email\' is a valid email address e.g: handle@domain format\
                      </span>\
                      <br>\
                      <input  style="background-color:black; \
                              border: solid 1px #6E6E6E;\
                              height: 30px; \
                              font-size:18px; \
                              margin-bottom: 5px;\
                              type="text" name="phone" placeholder="Please enter 10 digits" ng-model="reg.currUser.phone"\
                              ng-pattern="/^[0-9]{10,10}$/">\
                    {{ reg.currUser.phone }}\
                    <span ng-if="regForm.phone.$invalid && regForm.phone.$touched" style="color: red">\
                      Please make sure that \'Phone\' must be 10 digits long and without any special characters\
                    </span>\
                    {{reg.setPhone(reg.currUser.phone)}}\
                    <br>\
                    <input  style="background-color:black; \
                            border: solid 1px #6E6E6E;\
                            height: 30px; \
                            font-size:18px; \
                            margin-bottom: 5px;\
                            type="text" name="menunumber" placeholder="Menu Number" ng-model="reg.currUser.menunumber" required>\
                            {{ reg.currUser.menunumber }}\
                      <span\
                        ng-if="reg.checkShortName(reg.currUser.menunumber)===false" style="color: red">\
                          <span ng-if="reg.isShortNameEmpty(reg.currUser.menunumber)===false">(No such menu number exists)</span>\
                          <!-- {{ regForm.$invalid }} -->\
                          <span hidden>{{regForm.$invalid=true}}</span>\
                          <!-- {{ regForm.$invalid }} -->\
                      </span>\
                      <span\
                      ng-if="reg.checkShortName(reg.currUser.menunumber)===true" style="color: green">\
                        (menu exists)\
                        <!-- {{ regForm.$valid }} -->\
                        <span hidden>{{regForm.$valid=true}}</span>\
                        <!-- {{ regForm.$valid }} --> \
                      </span>\
                      <!-- outer val: {{ regForm.$invalid }} -->\
                      <br>\
                      <button ng-disabled="regForm.$invalid===true?true:false" ng-click="reg.submit()">Submit</button>\
                      <div style="margin-top: 10px;">\
                        <!-- Form valid? {{ regForm.$valid }} -->\
                        <!-- <br> -->\
                        <span\
                              ng-if="regForm.$valid && reg.completed===true">\
                              Your information has been saved\
                              <!-- <br>\
                              {{reg.favMenu.description}}\
                              <br>\
                              {{reg.favMenu.large_portion_name}}\
                              <br>\
                              {{reg.favMenu.name}}\
                              <br>\
                              {{reg.favMenu.price_large}}\
                              <br>\
                              {{reg.favMenu.price_small}}\
                              <br>\
                              {{reg.favMenu.short_name}}\
                              <br>\
                              {{reg.favMenu.small_portion_name}}\
                        </span> -->\
                      </div>\
                    </form>\
                  </fieldset>\
                  <hr>\
                </div>\
                ',
        controller: 'RegistrationController',
      })
      .state('public.myinfo', {
        url: '/myinfo',
        template:'<div ng-controller="RegistrationController as reg" style="text-align: center;">\
        <span ng-if="reg.getValue()[0]===\'undefined\' || reg.getValue()[0]===null">\
          <a ui-sref="public.signup">\
            <h1 style="color:white;">Not Signed Up Yet. Sign up Now!</h1>\
          </a>\
        </span>\
        <span ng-if="reg.getValue()[0]!==\'undefined\' && reg.getValue()[0]!==null">\
          <h1>Your data:</h1>\
          <table>\
            <tr>\
              <th>Field</th>\
              <th>Data</th>\
            </tr>\
            <tr>\
              <td><span class="label">Name:</span></td>\
              <td>{{reg.getValue()[0]}}</td>\
            </tr>\
            <tr>\
              <td><span class="label">Lastname:</span></td>\
              <td>{{reg.getValue()[1]}}</td>\
            </tr>\
            <tr>\
              <td><span class="label">Email:</span></td>\
              <td>{{reg.getValue()[2]}}</td>\
            </tr>\
            <tr>\
              <td><span class="label">Phone:</span></td>\
              <td>{{reg.getValue()[3]}}</td>\
            </tr>\
            <tr>\
              <td><span class="label">Favorite menu description:</span></td>\
              <td>{{reg.getValue()[4]}}</td>\
            </tr>\
            <tr>\
              <td><span class="label">Favorite menu large portion name:</span></td>\
              <td>{{reg.getValue()[5]}}</td>\
            </tr>\
            <tr>\
              <td><span class="label">Favorite menu name:</span></td>\
              <td>{{reg.getValue()[6]}}</td>\
            </tr>\
            <tr>\
              <td><span class="label">Favorite menu price large:</span></td>\
              <td>{{reg.getValue()[7]}}</td>\
            </tr>\
            <tr>\
              <td><span class="label">Favorite menu short name:</span></td>\
              <td>{{reg.getValue()[8]}}</td>\
            </tr>\
            <tr>\
              <td><span class="label">Favorite menu small portion name:</span></td>\
              <td>{{reg.getValue()[9]}}</td>\
            </tr>\
          </table>\
        </span>\
      </div>',
        controller: 'RegistrationController',
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
