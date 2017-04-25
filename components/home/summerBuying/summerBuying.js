angular.module('summerBuyingModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home.summerBuying',{
			url:'/summerBuying',
			templateUrl:'components/home/summerBuying/summerBuying.html',
			controller:'summerBuyingCtrl',
			css:['components/home/home.css','components/home/summerBuying/summerBuying.css']
		})
})
.controller('summerBuyingCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/home/summerBuying/new.json').success(function(res){
		console.log('rrrrrrr',res.data.list);
		$scope.allSummerList = res.data.list;
	})
}])