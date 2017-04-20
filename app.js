angular.module('mogujie',['ui.router','angularCSS','homeModule','categoryModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})