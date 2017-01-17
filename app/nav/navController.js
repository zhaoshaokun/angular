/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular.module('dbMVP')
  	.controller("navController", ['$scope','$rootScope', 'httpServer', function($scope, $rootScope, httpServer){
  		//暴露一个对象到全局
  		$scope.inputText = '';
  		//请求的地址
  		$scope.searchMovie = function($event, text){
  			var keycode = event.keyCode || event.which;
  			if(keycode == 13 || keycode == 108){
  				// httpServer.getAllMovie(getUrl, {q:text,start:0,count:10}, function(result){
  				// 	console.log(result);
          //改变哈希值 跳转路由
          // window.location.href = "/#/search";
  				// })
          //上面的请求其实应该放到searchController中。
          //但是text传不到searchController中。
          //因为searchController中没有搜索字段。 
          //此时应该采用广播的形式。(父控制器向子控制器中广播。所以用broadcast)
          $rootScope.text = text;
          window.location.href = "/#/search";
          $scope.inputText = '';
  			}

  		}

  }]);

})();