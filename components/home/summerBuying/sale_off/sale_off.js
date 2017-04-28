angular.module('sale_offModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home.summerBuying.sale_off',{
            url: '/sale_off',
            templateUrl: 'components/home/summerBuying/sale_off/sale_off.html',
            controller:'sale_offCtrl',
            css:['components/home/summerBuying.css','components/home/summerBuying/sale_off/sale_off.css']
        })
})
.controller('sale_offCtrl',['$scope','$http','$anchorScroll','$location','myFactory',function($scope,$http,$anchorScroll,$location,myFactory){
	$scope.itemInLastGoods = myFactory.get();
//	$scope.isShow = false;
//	$scope.showNavList = function(){
//		$scope.isShow = !$scope.isShow;
//	}


}])