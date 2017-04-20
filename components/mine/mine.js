angular.module('mineModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('mine',{
		url:'/mine',
		templateUrl: 'components/mine/mine.html',
//      controller:'categoryCtrl',
        css:'components/mine/mine.css'
	})
})