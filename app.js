angular.module('mogujie',['ui.router','angularCSS','homeModule','categoryModule','shopcarModule','mineModule','groupBuyingModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})