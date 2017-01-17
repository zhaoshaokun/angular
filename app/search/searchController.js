/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;
(function() {

    angular.module('dbMVP')
        .controller("searchController", ['$scope', '$rootScope', 'httpServer', function($scope, $rootScope, httpServer) {
            $scope.$watch('text', function(newVal, oldVal, scope) {
                console.log($rootScope.text);
                var Text = $rootScope.text;
                $scope.isLoading = true;
                var getUrl = "http://api.douban.com/v2/movie/search";
                if (!Text) {
                    return;
                } else {
                    httpServer.getAllMovie(getUrl, { q: Text, start: 0, count: 10 }, function(result) {
                        console.log(result);
                        $scope.allSearchMovies = result;
                        $scope.isLoading = false;
                        $scope.$digest();

                    })
                }

            });
        }]);

})();
