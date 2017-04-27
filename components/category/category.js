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

 .factory('myFactory', function () {
    //定义factory返回对象
    var myServices = {};    
    //定义参数对象
    var myObject = [];
    var _set = function (key,data) {
       myObject[key] = data;     
    };
    var _get = function (key) {
        return myObject[key];
    };
    myServices.set = _set;
    myServices.get = _get;
    return myServices;
  
})  

.controller('categoryCtrl',['$scope','$http','$timeout','myFactory','$rootScope',function($scope,$http,$timeout,myFactory,$rootScope){
	$http.get('components/category/category1.json').success(function(res){
		
//		设置左边默认值
		$scope.leftMenuCategoryArr=res.data[41789].list;
//		设置右边产品默认值
		initCategoryRightUpMenu(res.data[41789].list[0],$scope,$http,myFactory);
//		设置第一个左边选中默认值
		$scope.isCategoryLeftSelected= 0;
		
//		设置右边下面数据默认值
		initCategoryRightDownMenu($scope,$http,res.data[41789].list[0].miniWallkey,$timeout,res.data[41789].list[0].acm);
		
		//设置左边菜单点击事件
		$scope.initCategoryLeftMenu=function($event,$index,leftItem){
			scrollTo(0, 0);
			//获取右边子菜单上面部分
			if(leftItem.maitKey){
				$scope.isCategoryLeftSelected= $index;
				initCategoryRightUpMenu(leftItem,$scope,$http,myFactory);
			}
			
			//获取右边子菜单下面部分
			if(leftItem.miniWallkey){
				initCategoryRightDownMenu($scope,$http,leftItem.miniWallkey,$timeout,leftItem.acm);
			}
		}	
	});
	
	$scope.toCategoryKindDetail=function(categoryKindImg){
		sessionStorage.setItem("categoryKindDetailItem",JSON.stringify(categoryKindImg));
	}
}])


function initCategoryRightDownMenu($scope,$http,miniWallkey,$timeout,acm){

				initWaterfall($scope,$http,miniWallkey,$timeout,"pop",acm);
							
				//综合 销量 新品三个排序事件
				$scope.initCategory_rightMenu_buttom_title_zhonghe=function($event){
					$scope.category_rightMenu_buttom_titleSelected=1;
					initWaterfall($scope,$http,miniWallkey,$timeout,"pop",acm);
				}
				
				$scope.initCategory_rightMenu_buttom_title_xiaoliang=function($event){
					$scope.category_rightMenu_buttom_titleSelected=2;
					initWaterfall($scope,$http,miniWallkey,$timeout,"sell",acm);
				}
				
				$scope.initCategory_rightMenu_buttom_title_xinpin=function($event){
					$scope.category_rightMenu_buttom_titleSelected=3;
					initWaterfall($scope,$http,miniWallkey,$timeout,"new",acm);
				}
				
}

function initCategoryRightUpMenu(leftItem,$scope,$http,myFactory){
	//
	$scope.toCategoryKind=function(rightUpItem){
		myFactory.set("rightUpItem",rightUpItem);	
		myFactory.set("leftItem",leftItem);
		
	}
				$http.jsonp('http://mce.mogujie.com/jsonp/makeup/3?pid='+leftItem.maitKey+'&callback=JSON_CALLBACK').success(function(produts){
					$scope.rightMenuCategoryArr=produts.data;
				})
}



//加载瀑布流数据

function initWaterfall($scope,$http,miniWallkey,$timeout,sort,acm){
		var page=1;	
				$http.jsonp('http://list.mogujie.com/search?page='+page+'&sort='+sort+'&acm='+acm+'&fcid='+miniWallkey+'&callback=JSON_CALLBACK').success(function(allProduts){
					console.log(allProduts+"111111");
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