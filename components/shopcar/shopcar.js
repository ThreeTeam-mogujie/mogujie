angular.module('shopcarModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('shopcar',{
		url:'/shopcar',
		templateUrl: 'components/shopcar/shopcar.html',
//      controller:'categoryCtrl',
        css:'components/shopcar/shopcar.css'
	})
})