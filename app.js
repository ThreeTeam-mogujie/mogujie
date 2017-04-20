angular.module('mogujie',['ui.router','angularCSS','homeModule','categoryModule','shopcarModule','mineModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})