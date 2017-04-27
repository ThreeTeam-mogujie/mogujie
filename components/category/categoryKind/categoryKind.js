angular.module('categoryKindModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('category.categoryKind',{
			url:'/categoryKind',
			templateUrl:'components/category/categoryKind/categoryKind.html',
			controller:'categoryKindCon',
			css:['components/category/category.css','components/category/categoryKind/categoryKind.css']

		})
})

.controller('categoryKindCon',['$scope','$http',function($scope,$http){
	
}])



