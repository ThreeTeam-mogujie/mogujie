angular.module('mogujie',['ui.router','angularCSS','homeModule','me-lazyload','categoryModule','shopcarModule','mineModule','groupBuyingModule','UZGroupModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})