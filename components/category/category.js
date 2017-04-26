angular.module('categoryModule',["ngWaterfall","me-lazyload","categoryKindModule"])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('category',{
		url:'/category',
		templateUrl: 'components/category/category.html',
        controller:'categoryCtrl',
        css:'components/category/category.css'
	})
})

   
.controller('categoryCtrl',['$scope','$http','$timeout',function($scope,$http,$timeout){
	$http.get('components/category/category1.json').success(function(res){
		
//		设置左边默认值
		$scope.leftMenuCategoryArr=res.data[41789].list;
//		设置右边产品默认值
		initCategoryRightUpMenu(res.data[41789].list[0].maitKey,$scope,$http);
//		设置第一个左边选中默认值
		$scope.isCategoryLeftSelected= 0;
		
//		设置右边下面数据默认值
		initCategoryRightDownMenu($scope,$http,res.data[41789].list[0].miniWallkey,$timeout,res.data[41789].list[0].acm);
		
		//设置左边菜单点击事件
		$scope.initCategoryLeftMenu=function($event,maitKey,$index,miniWallkey,acm){
			scrollTo(0, 0);
			//获取右边子菜单上面部分
			if(maitKey){
				$scope.isCategoryLeftSelected= $index;
				initCategoryRightUpMenu(maitKey,$scope,$http);
			}
			
			//获取右边子菜单下面部分
			if(miniWallkey){
				initCategoryRightDownMenu($scope,$http,miniWallkey,$timeout,acm);
			}
		}	
	});
	
	

}])


function initCategoryRightDownMenu($scope,$http,miniWallkey,$timeout,acm){

				initWaterfall($scope,$http,miniWallkey,$timeout,"pop",acm);
							
				//综合 销量 新品三个排序事件
				$scope.initCategory_rightMenu_buttom_title_zhonghe=function($event){
					$scope.category_rightMenu_buttom_titleSelected=1;
					initWaterfall($scope,$http,miniWallkey,$timeout,"pop");
				}
				
				$scope.initCategory_rightMenu_buttom_title_xiaoliang=function($event){
					$scope.category_rightMenu_buttom_titleSelected=2;
					initWaterfall($scope,$http,miniWallkey,$timeout,"sell");
				}
				
				$scope.initCategory_rightMenu_buttom_title_xinpin=function($event){
					$scope.category_rightMenu_buttom_titleSelected=3;
					initWaterfall($scope,$http,miniWallkey,$timeout,"new");
				}
				
}

function initCategoryRightUpMenu(maitKey,$scope,$http){
				$http.jsonp('http://mce.mogujie.com/jsonp/makeup/3?pid='+maitKey+'&callback=JSON_CALLBACK').success(function(produts){
					$scope.rightMenuCategoryArr=produts.data;
				})
}



//加载瀑布流数据

function initWaterfall($scope,$http,miniWallkey,$timeout,sort,acm){
		var page=1;	
				$http.jsonp('http://list.mogujie.com/search?page='+page+'&sort='+sort+'&acm='+acm+'&fcid='+miniWallkey+'&callback=JSON_CALLBACK').success(function(allProduts){
					console.log(allProduts);
					 $scope.initCategoryRightDownMenuImages=allProduts.result.wall.list;
				})
				
		$scope.loadMoreData = function(){
            $timeout(function(){
                page++;
                $http.jsonp('http://list.mogujie.com/search?page='+page+'&sort='+sort+'&acm='+acm+'&fcid='+miniWallkey+'&callback=JSON_CALLBACK').success(function(allProduts){					 
					 for (var i = 0; i < allProduts.result.wall.list.length; i++) {
                        $scope.initCategoryRightDownMenuImages.push(allProduts.result.wall.list[i]);
                 	}					 
				})

            },10);
        };
        
	 	$scope.$on("waterfall:loadMore",function(){//滚动自动填充事件
              $scope.loadMoreData();
          })
		
};