<<<<<<< HEAD
angular.module('mogujie',['ui.router','angularCSS','homeModule','me-lazyload','categoryModule','shopcarModule','mineModule','groupBuyingModule','UZGroupModule'])
=======
angular.module('mogujie',['ui.router','angularCSS','me-lazyload','homeModule','categoryModule','shopcarModule','mineModule','groupBuyingModule','summerBuyingModule','UZGroupModule'])
>>>>>>> 834ba6134b4c15724a8b445fdd3753d1eda45eca
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})