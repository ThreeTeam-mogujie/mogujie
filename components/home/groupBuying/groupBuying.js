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

.controller('groupBuyingCtrl',['$scope','$http','$anchorScroll','$location',function($scope,$http,$anchorScroll,$location){
	//u质团
	$http.get('components/home/groupBuying/json/uGroup.json').success(function(res){
		$scope.bannerImg = res.data[12908].list[0].image;
		$scope.ugroup = res.data[12777].list;
	})
	//品牌团
	$http.get('components/home/groupBuying/json/brandTuan.json').success(function(res){
//      console.log(res.result.handschop);
        $scope.brand = res.result.handschop.brand;
        $scope.brandlist = res.result.handschop.list;
	})
	
	//大家都在买
	$http.get('components/home/groupBuying/json/allBuy.json').success(function(res){
//      console.log(res.data[12853].list);
        $scope.allbuy = res.data[12853].list;
	})
	//今日精选
	
	$http.get('components/home/groupBuying/json/choiceTody.json').success(function(res){
//      console.log(res.result.wall);
//      console.log(1);
        $scope.allGoods = res.result.wall.docs;
        $scope.goos0 = $scope.allGoods[0].show;
        $scope.goos1 = $scope.allGoods[1].show;
	})
//女装	
		$scope.backImg = false;
//  $scope.backImg = $scope.isimg;
	$scope.allGroupBuyGoods = function(jsongoods,backImg){
		$scope.backImg = false;
		$http.get('components/home/groupBuying/json/'+jsongoods).success(function(res){
			$scope.allGoods = res.result.wall.docs;
			if (jsongoods == 'choiceTody.json') {
				 $scope.goos0 = $scope.allGoods[0].show;
       			 $scope.goos1 = $scope.allGoods[1].show;
			}else{
				$scope.goos0 = $scope.allGoods[0];
       			 $scope.goos1 = $scope.allGoods[1];
			}       
        
		    $scope.backImg = ! $scope.backImg;
		$location.hash('todayBuyWrap');
        $anchorScroll();

	})
	}
	
}])