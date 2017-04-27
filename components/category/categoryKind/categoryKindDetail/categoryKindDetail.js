angular.module('categoryKindDetailModule',[])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('category.categoryKind.categoryKindDetail',{
			url:'/categoryKindDetail',
			templateUrl:'components/category/categoryKind/categoryKindDetail/categoryKindDetail.html',
			controller:'categoryKindDetailCon',
			css:['components/category/categoryKind/categoryKind.css','components/category/categoryKind/categoryKindDetail/categoryKindDetail.css']

		})
})






.controller('categoryKindDetailCon',['$scope','$http','$timeout','$rootScope',function($scope,$http,$timeout,$rootScope){
	initCategoryKindDetailSwiper($timeout);
	$scope.categoryKindDetailItem = JSON.parse(sessionStorage.getItem("categoryKindDetailItem"));
	if($scope.categoryKindDetailItem.acm){
		if($scope.categoryKindDetailItem.tradeItemId){
			var iid=$scope.categoryKindDetailItem.tradeItemId;		
		}else{
			var iid = $scope.categoryKindDetailItem.iid;
		}
		
		$http.get('http://m.mogujie.com/detail/mgj/v1/h5?_ajax=1&iid='+iid+'&cparam=').success(function(produts){
					$scope.rightMenuCategoryDetailArr=produts.result;
					console.log(produts);

		})
	}
}])


function initCategoryKindDetailSwiper($timeout){
//	new Swiper ('.swiper-container', {
//              loop: true,
//              autoplay:500,              
//              initialSlide: 0,
//              paginationType : 'fraction',
//              // 如果需要分页器
//              pagination: '.swiper-pagination',
//               observer:true,
//              observeParents:true,
//
//      })
	
	
	 $timeout(function(){
         new Swiper ('.swiper-container', {
                loop: true,
                autoplay:false,           
                paginationType : 'fraction',
                // 如果需要分页器
//				allowSwipeToNext:false,
                pagination: '.swiper-pagination',
            })
        },50);

}