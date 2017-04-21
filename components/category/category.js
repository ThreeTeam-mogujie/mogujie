angular.module('categoryModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('category',{
		url:'/category',
		templateUrl: 'components/category/category.html',
        controller:'categoryCtrl',
        css:'components/category/category.css'
	})
})

.controller('categoryCtrl',['$scope','$http',function($scope,$http){
	$http.get('components/category/category1.json').success(function(res){
		
//		设置左边默认值
		$scope.leftMenuCategoryArr=res.data[41789].list;
//		设置右边产品默认值
		initCategoryRightUpMenu(res.data[41789].list[0].maitKey,$scope,$http);
//		设置第一个左边选中默认值
		$scope.isCategoryLeftSelected= 0;
			
		$scope.initCategoryLeftMenu=function($event,maitKey,$index,miniWallkey){
			
			//获取右边子菜单上面部分
			if(maitKey){
				$scope.isCategoryLeftSelected= $index;
				initCategoryRightUpMenu(maitKey,$scope,$http);
			}
			
			//获取右边子菜单下面部分
			if(miniWallkey){
				initCategoryRightDownMenu($scope,$http,miniWallkey);
			}
		}
		
	});
	
}])


function initCategoryRightDownMenu($scope,$http,miniWallkey){
				$http.jsonp('http://list.mogujie.com/search?fcid='+miniWallkey+'&callback=JSON_CALLBACK').success(function(allProduts){
					console.log(allProduts);
				})
}

function initCategoryRightUpMenu(maitKey,$scope,$http){
				$http.jsonp('http://mce.mogujie.com/jsonp/makeup/3?pid='+maitKey+'&callback=JSON_CALLBACK').success(function(produts){
					$scope.rightMenuCategoryArr=produts.data;
				})
}
