angular.module('summerBuyingModule',['sale_offModule'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home.summerBuying',{
			url:'/summerBuying',
			templateUrl:'components/home/summerBuying/summerBuying.html',
			controller:'summerBuyingCtrl',
			css:['components/home/home.css','components/home/summerBuying/summerBuying.css']
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
.controller('summerBuyingCtrl',['$scope','$http','$anchorScroll','$location','myFactory',function($scope,$http,$anchorScroll,$location,myFactory){
	$http.get('components/home/summerBuying/bag.json').success(function(res){
		console.log('rrrrrrr',res.data.items);
		$scope.allSummerList = res.data.items;
	})
	$scope.fn = function(json){
		$http.get(json).success(function(res){
		console.log('rrrrrrr',res.data.items);
		$scope.allSummerList = res.data.items;
	})
	}
	
	//$scope.tosale_offBuying = null;
		$scope.isActive_saleoff = true;
		$scope.tosale_offBuying = function(item){
			console.log(111111111111);
			myFactory.set(item);
			$scope.isActive_saleoff = !$scope.isActive_saleoff;
		}
}])