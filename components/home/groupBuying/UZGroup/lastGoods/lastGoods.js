angular.module('lastGoodsModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home.groupBuying.UZGroup.lastGoods',{
			url:'/lastGoods',
			templateUrl:'components/home/groupBuying/UZGroup/lastGoods/lastGoods.html',
			controller:'lastGoodsCtrl',
			css:['components/home/home.css','components/home/groupBuying/groupBuying.css','components/home/groupBuying/UZGroup/lastGoods/lastGoods.css']

		})
})
.controller('lastGoodsCtrl',['$scope','$http','$anchorScroll','$location','myFactory',function($scope,$http,$anchorScroll,$location,myFactory){
//	console.log(myFactory.get());
	$scope.itemInLastGoods = myFactory.get();
	$scope.isShow = false;
	$scope.showNavList = function(){
		$scope.isShow = !$scope.isShow;
	}

}])
