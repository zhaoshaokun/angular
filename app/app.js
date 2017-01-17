/**
 * 
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
;(function() {

  angular.module("dbMVP", ['ngRoute']).config([
    '$routeProvider',
    '$locationProvider',
     function($routeProvider, $locationProvider){
              // routes
        $routeProvider
          .when('/hot', {
            templateUrl: 'views/hot/hot.html',
            controller: 'hotController',
            controllerAs: 'hot'
          })
          .when('/future', {
            templateUrl: 'views/future/future.html',
            controller: 'futureController',
            controllerAs: 'future'
          })
          .when('/top', {
            templateUrl: 'views/top/top.html',
            controller: 'topController',
            controllerAs: 'top'
          })
          .when('/search', {
            templateUrl: 'views/search/search.html',
            controller: 'searchController',
            controllerAs: 'search'
          })
          .when('/subject/:id', {
            templateUrl: 'views/detail/detail.html',
            controller: 'detailController',
            controllerAs: 'detail'
          })
          .otherwise({
            redirectTo: '/hot'
          });


      


  }])


  /**
   * Run block
   */

  angular.module('dbMVP').run([
    '$rootScope',
    '$location', function(){

  }])

})();