angular.module('UZGroupModule',['lastGoodsModule'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home.groupBuying.UZGroup',{
			url:'/UZGroup',
			templateUrl:'components/home/groupBuying/UZGroup/UZGroup.html',
			controller:'UZGroupCtrl',
			css:['components/home/home.css','components/home/groupBuying/groupBuying.css','components/home/groupBuying/UZGroup/UZGroup.css']

		})
})
//实现页面传值
.factory('myFactory', function () {
    //定义factory返回对象
    var myServices = {};    
    //定义参数对象
    var myObject = {};
    var _set = function (data) {
       myObject = data;     
    };
    var _get = function () {
        return myObject;
    };
    myServices.set = _set;
    myServices.get = _get;
    return myServices;
  
})

.controller('UZGroupCtrl',['$scope','$http','$anchorScroll','$location','myFactory',function($scope,$http,$anchorScroll,$location,myFactory){
	//2.24
	$http.get('components/home/groupBuying/UZGroup/UZjson/todayS.json').success(function(res){
//		console.log(res.result.highGrade.list);
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
			console.log(2);
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
	
//top榜单
	$http.get('components/home/groupBuying/UZGroup/UZjson/all1.json').success(function(res){
		$scope.topAllGoods = res.result.eventwall.list;
	})
	
	$scope.TopGoods = function(UZTopGoods){
//		console.log(1);
			$http.get('components/home/groupBuying/UZGroup/UZjson/'+UZTopGoods).success(function(res){
			$scope.topAllGoods = res.result.eventwall.list;
		})
	}
	
	
//	$scope.i = localStorage.getItem('gtUZ');
//	if($scope.i != 0){
//		
//	}else{
//		
//	}
		$scope.isActive2 = true;
		$scope.showLastGoods = function(item){
			myFactory.set(item);
			$scope.isActive2 = false;
		}
}])
