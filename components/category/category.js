angular.module('categoryModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('category',{
		url:'/category',
		templateUrl: 'components/category/category.html',
//      controller:'categoryCtrl',
        css:'components/category/category.css'
	})
})