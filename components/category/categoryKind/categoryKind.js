angular.module('categoryKindModule',["categoryKindDetailModule"])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('category.categoryKind',{
			url:'/categoryKind',
			templateUrl:'components/category/categoryKind/categoryKind.html',
			controller:'categoryKindCon',
			css:['components/category/category.css','components/category/categoryKind/categoryKind.css']

		})
})



	
.controller('categoryKindCon',['$scope','$http','$timeout','myFactory','$rootScope',function($scope,$http,$timeout,myFactory,$rootScope){
	//从category页面传值过来
	
	if(myFactory.get("rightUpItem")){
		$rootScope.categoryKindItem = myFactory.get("rightUpItem");
		sessionStorage.setItem("categoryKindItem",JSON.stringify(myFactory.get("rightUpItem")));
	}else{
		$rootScope.categoryKindItem = JSON.parse(sessionStorage.getItem("categoryKindItem"));
	}
	

//	为四个分类添加不同事
	categoryKindTitleClick($scope,$http,$rootScope.categoryKindItem,$timeout);
	
	$scope.toCategoryKindDetail=function(categoryKindImg){
		sessionStorage.setItem("categoryKindDetailItem",JSON.stringify(categoryKindImg));
	}
	
}])



function categoryKindTitleClick($scope,$http,categoryKindItem,$timeout){
	var fcid=getSubStringNum(categoryKindItem.link,"fcid=");
	var acm =getSubStringNum(categoryKindItem.link,"acm=");
	initCategoryKindWaterfall($scope,$http,fcid,$timeout,"pop",acm,categoryKindItem.title);	

	$scope.categoryKindTitleZh=function($event){
		$scope.categoryKindTitleSelected=1;	
		initCategoryKindWaterfall($scope,$http,fcid,$timeout,"pop",acm,categoryKindItem.title);
	}
	
	$scope.categoryKindTitleXl=function($event){
		$scope.categoryKindTitleSelected=2;
		initCategoryKindWaterfall($scope,$http,fcid,$timeout,"sell",acm,categoryKindItem.title);
	}
	
	$scope.categoryKindTitleXp=function($event){
		$scope.categoryKindTitleSelected=3;
		initCategoryKindWaterfall($scope,$http,fcid,$timeout,"new",acm,categoryKindItem.title);
	}
	
	$scope.categoryKindTitleJe=function($event){
		$scope.categoryKindTitleSelected=4;

	}
}


function getSubStringNum(string,subString){
		var start = string.indexOf(subString);
		var s = string.substring(start);	
		var end = s.indexOf("&");
		if(end<=0){
			end = s.length;
		}
		var ss=s.substring(0,end);
		var startNext = ss.indexOf("=");
		return (ss.substring(startNext+1));
}


//加载瀑布流数据

function initCategoryKindWaterfall($scope,$http,ficd,$timeout,sort,acm,title){

		var page=1;	
				$http.jsonp('http://list.mogujie.com/search?page='+page+'$title='+title+'&sort='+sort+'&acm='+acm+'&fcid='+ficd+'&cKey=16&callback=JSON_CALLBACK').success(function(allProduts){
					 $scope.categoryKindImages=allProduts.result.wall.docs;
//					 console.log("categoryKind"+allProduts);
					 $scope.categoryKindHotCates=allProduts.result.hotCates;

				})
				
		$scope.loadMoreData = function(){
            $timeout(function(){
                page++;
                $http.jsonp('http://list.mogujie.com/search?page='+page+'&sort='+sort+'&acm='+acm+'&fcid='+ficd+'&cKey=16&callback=JSON_CALLBACK').success(function(allProduts){					 
					 for (var i = 0; i < allProduts.result.wall.docs.length; i++) {
                        $scope.categoryKindImages.push(allProduts.result.wall.docs[i]);
                 	}					 
				})

            },10);
        };
        
	 	$scope.$on("waterfall:loadMore",function(){//滚动自动填充事件
              $scope.loadMoreData();
          })
		
};