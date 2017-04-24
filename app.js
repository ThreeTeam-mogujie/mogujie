angular.module('mogujie',['ui.router','angularCSS','homeModule','categoryModule','shopcarModule','mineModule','groupBuyingModule','summerBuyingModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})