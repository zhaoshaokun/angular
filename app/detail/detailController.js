/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular.module('dbMVP')
  	.controller("detailController", ['$scope', '$routeParams', 'httpServer', function($scope, $routeParams, httpServer){
  		//需要在这里拿到ID值，来请求该电影的详细信息
  		console.log($routeParams.id);

  		$scope.isLoading = true;
  		//进行请求。每次请求都需先注入httpServer服务。
  		var getUrl = 'http://api.douban.com/v2/movie/subject/' + $routeParams.id;
  		httpServer.getAllMovie(getUrl, {}, function(data){
  			$scope.detailMovie = data;
  			$scope.isLoading = false;
  			$scope.$digest();
  		})
  }]);

})();