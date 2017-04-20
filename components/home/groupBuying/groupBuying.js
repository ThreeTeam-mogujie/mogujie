angular.module('groupBuyingModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home.groupBuying',{
			url:'/groupBuying',
			tetemplateUrl:'components/home/groupBuying/groupBuying.html',
			controller:'groupBuyingCtrl',
			css:components/home/groupBuying/groupBuying.css

		})
})

.controller('groupBuyingCtrl',['$scope',function($scope){
	
}])