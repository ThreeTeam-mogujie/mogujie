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
.controller('homeCtrl',['$scope','$http','swiper',function($scope,$http){
	/*登的修改*/
	$scope.isActive = true;
	$scope.viewGroupBuying = function(){
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