angular.module('mogujie',['ui.router','angularCSS','me-lazyload','homeModule','categoryModule','shopcarModule','mineModule','groupBuyingModule','summerBuyingModule','UZGroupModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})