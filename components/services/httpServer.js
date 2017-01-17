/*
* @Author: 虚竹
* @Date:   2017-01-14 10:46:35
* @Last Modified by:   赵少坤
* @Last Modified time: 2017-01-14 17:55:16
*/

;(function(angular) {
    angular.module('dbMVP').service('httpServer', ['$http', function($http){
    	this.getAllMovie = function(url, paramObj, fn) {

            function getData(result) {
                // console.log(result);
                fn(result);
            }

            window.getData = getData;

            var paramString = "";
            for (item in paramObj) {
                paramString += item + "=" + paramObj[item] + "&";
            }

    		var allUrl = url + "?" + paramString;

            var script = document.createElement("script");

            script.src = allUrl + "callback=getData";

            document.body.appendChild(script);

    	}
    }]);
})(angular);
