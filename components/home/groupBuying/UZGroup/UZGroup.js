angular.module('UZGroupModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home.groupBuying.UZGroup',{
			url:'/UZGroup',
			templateUrl:'components/home/groupBuying/UZGroup/UZGroup.html',
			controller:'UZGroupCtrl',
			css:['components/home/home.css','components/home/groupBuying/groupBuying.css','components/home/groupBuying/UZGroup/UZGroup.css']

		})
})

.controller('UZGroupCtrl',['$scope','$http','$anchorScroll','$location',function($scope,$http,$anchorScroll,$location){
	//2.24
	$http.get('components/home/groupBuying/UZGroup/UZjson/todayS.json').success(function(res){
		console.log(res.result.highGrade.list);
		$scope.todayGoods = res.result.highGrade.list;
		
		//2.24收起
		$scope.isShow = true;
		$scope.packUp = function(){
			console.log(1);
			$scope.isShow = !$scope.isShow;
		}
	})
	
	//2.23
	$http.get('components/home/groupBuying/UZGroup/UZjson/zuotian.json').success(function(res){
//		console.log(res.result.highGrade.list);
		$scope.zuotianGoods = res.result.highGrade.list;
		
		//2.23收起
		$scope.iszuotianShow = true;
		$scope.packUp2 = function(){
			console.log(1);
			$scope.iszuotianShow = !$scope.iszuotianShow;
		}
	})
	
		//2.22
	$http.get('components/home/groupBuying/UZGroup/UZjson/qiantian.json').success(function(res){
//		console.log(res.result.highGrade.list);
		$scope.zuotianGoods = res.result.highGrade.list;
		//2.22收起
		$scope.isqiantianShow = true;
		$scope.packUp3 = function(){
//			console.log(1);
			$scope.isqiantianShow = !$scope.isqiantianShow;
		}
	})
	
	
	
	$scope.i = localStorage.getItem('gtUZ');
	if($scope.i != 0){
		
	}else{
		
	}
}])
