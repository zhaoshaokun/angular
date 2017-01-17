/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular.module('dbMVP')
  	.controller("hotController", ['$scope', 'httpServer', function($scope, httpServer){
	//加载动画  初始化为true，数据加载完成以后置为false。		
		$scope.isLoading = true;

		//初始当前页为1
		$scope.currentPage = 1;
		//初始总页数为1
    	$scope.totalPage = 1;
    	//初始每页加载的信息数量
    	var pageCount = 10;
    	//开始的信息数目ID
    	var start = 0;
  		var getUrl = "http://api.douban.com/v2/movie/in_theaters";
		//请求服务  

			httpServer.getAllMovie(getUrl, {start:start, count:pageCount}, function (result){
				$scope.allHotMovies = result;
				console.log(result);
				$scope.isLoading = false;
				//向上取整，表示总分页数，等于总的请求到的数量/每页固定数量
				$scope.totalPage = Math.ceil(result.total / pageCount);
				$scope.$digest();
			});  		


			//下一页
		$scope.nextPage = function(page){
			//当当前页数等总页数时，退出
			if(page == $scope.totalPage){
				return;
			}
			$scope.isLoading = true;
			//翻页以后，开始的信息数目ID为页数*每页的数量
			var start = page*pageCount;
			httpServer.getAllMovie(getUrl, {start:start, count:pageCount}, function (result){
				$scope.allHotMovies = result;
				console.log(result);
				$scope.isLoading = false;
				//向上取整，表示总分页数，等于总的请求到的数量/每页固定数量
				$scope.totalPage = Math.ceil(result.total / pageCount);
				//页数+1
				$scope.currentPage++;
				$scope.$digest();
			});
		}
		//上一页
		$scope.prePage = function(page){
			if(page == 1){
				return;
			}

			$scope.isLoading = true;
			var start = (page-1)*pageCount;
			httpServer.getAllMovie(getUrl, {start:start, count:pageCount}, function (result){
				$scope.allHotMovies = result;
				console.log(result);
				$scope.isLoading = false;
				//向上取整，表示总分页数，等于总的请求到的数量/每页固定数量
				$scope.totalPage = Math.ceil(result.total / pageCount);
				$scope.currentPage--;
				$scope.$digest();
			});
		}

		//子控制器接收navController发送的广播
		$scope.$on("message", function(event, data){
			console.log(data);
			$scope.isLoading = true;
			var getUrl = "http://api.douban.com/v2/movie/search";
			httpServer.getAllMovie(getUrl, {q:data.inputText, start:0, count:10}, function (result){
				$scope.allHotMovies = result;
				console.log(result);
				$scope.isLoading = false;
				//向上取整，表示总分页数，等于总的请求到的数量/每页固定数量
				$scope.totalPage = Math.ceil(result.total / pageCount);
				$scope.$digest();
			});
  		})
  	}])

})();