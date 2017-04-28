angular.module('homeModule',[])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl: 'components/home/home.html',
        controller:'homeCtrl',
        css:'components/home/home.css'
	})
})
.service('swiper',['$timeout',function($timeout){
        $timeout(function(){
            new Swiper ('.swiper-container', {
//                direction: 'vertical',
                loop: true,
                autoplay:500,
                // 如果需要分页器
                pagination: '.swiper-pagination',

            })
        },50);
    }])
//实现页面传值
.factory('myFactory', function () {
    //定义factory返回对象
    var myServices = {};    
    //定义参数对象
    var myObject = {};
    var _set = function (data) {
       myObject = data;     
    };
    var _get = function () {
        return myObject;
    };
    myServices.set = _set;
    myServices.get = _get;
    return myServices;
  
})
.controller('homeCtrl',['$scope','$http','swiper','myFactory',function($scope,$http,swiper,myFactory){
	/*登的修改*/
	$scope.isActive = true;
	$scope.viewGroupBuying = function(){
//		myFactory.set(item);
		$scope.isActive = !$scope.isActive;
	}
	$scope.toDetail = function(item){
		myFactory.set(item);
		$scope.isActive = !$scope.isActive;
	}
	/**/
//        $scope.name='zhangzhang';
        $http.get('components/home/home.json').success(function(res){
            //console.log(res.data.act_info[0].act_rows);
//          console.log(res);
//          console.log(res.data);
//          console.log(res.data[36344]);
//          console.log(res.data[36344].list);

            //获取轮播数据
            $scope.arrSwiper = res.data[36344].list;

//          //团购，每日上新，新人专享
          $scope.arr1 = res.data[41161].list;
//
//          //秒杀
			//console.log(res.data[41119].list[0].title);
          $scope.arrMiaotitle = res.data[41119].list[0].title;
          $scope.arrMiaoarr = res.data[41119].list[0].list;
//            $scope.arrLast2 = res.data.act_info[5].act_rows[0].category_detail.goods;
			$scope.fx = function(x){
				console.log(x);
			}

			//超实惠-促销直达
			$scope.arrShihui = res.data[40298].list;
        });
        $http.get('components/home/title.json').success(function(res){
        	console.log('sssssssssss:',res.data.list);
        	$scope.arrTitle = res.data.list;
        });
        $http.get('components/home/love1.json').success(function(res){
        	console.log('tttttttttt',res.result.wall.docs);
        	$scope.arrList = res.result.wall.docs;
        })
    }]);