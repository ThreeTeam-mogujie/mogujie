angular.module('groupBuyingModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home.groupBuying',{
			url:'/groupBuying',
			templateUrl:'components/home/groupBuying/groupBuying.html',
			controller:'groupBuyingCtrl',
			css:['components/home/home.css','components/home/groupBuying/groupBuying.css']

		})
})

.controller('groupBuyingCtrl',['$scope','$http',function($scope,$http){
	//u质团
	$http.get('components/home/groupBuying/json/uGroup.json').success(function(res){
		$scope.bannerImg = res.data[12908].list[0].image;
		$scope.ugroup = res.data[12777].list;
	})
	//品牌团
	$http.get('components/home/groupBuying/json/brandTuan.json').success(function(res){
        console.log(res.result.handschop);
        $scope.brand = res.result.handschop.brand;
        $scope.brandlist = res.result.handschop.list;
	})
}])