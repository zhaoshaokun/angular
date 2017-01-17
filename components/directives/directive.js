/*
* @Author: 赵少坤
* @Date:   2017-01-17 10:41:35
* @Last Modified by:   赵少坤
* @Last Modified time: 2017-01-17 11:04:17
*/

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
    	.directive("setfocu", [function() {
    		return {
    			link:function(scope, elem, attrs) {
    				// elem让他的兄弟全部没有该class，只有他有
    				// elem.parent().siblings().toggleClass('active');
    				// elem.addClass('active');

    				elem.parent().children().each(function(index, el) {
    					$(el).on("click", function() {
    						var $this = $(this);
    						$this.siblings().removeClass('active');
    						$this.addClass('active');
    					})
    				});

    			}
    		}
    	}]);
        
})();