Zepto(function() {
 $('.footer-ul li').on('tap',function(){
        $(this).addClass('active').siblings().removeClass('active');
         $(this).css("color","red").siblings().css("color","#000");
        $('.big-ul>li').hide().eq($(this).index()).show();
        //$('.big-ul li')会报错，是指所有的li
   });
/*S all-goods*/
	$(".all-goods-left-ul>li").tap(function  () {
//		alert($(this).index()); /*不会console一下*/
		$(this).css({"background-color":" #fff","color":"red"}).siblings().css({"background-color":"#E5E5E5","color":"#000"})
	});
	$('.all-goods-left-ul>li').tap(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.all-goods-list-ul>li').hide().eq($(this).index()).show()
   });
/*E all-goods*/

/*S product-details*/
 $(".pro-detail-three-num").html(1);
$(".pro-detail-flour-num").html(1);
$(".pro-detail-three-p").find(".icon-jianhao1").on('click',function () {
	if (parseInt($(".pro-detail-three-num").html())>1){
		$(".pro-detail-three-num").html(parseInt($(".pro-detail-three-num").html())-1);
     	$(".pro-detail-four-num").html($(".pro-detail-three-num").html())
	} else{
	 return;
	}
   if (parseInt($(".pro-detail-three-num").html())==1){
   	$(".icon-jianhao11").css("color","#ccc");
   	$(".sell-out").show();
   }
});

$(".pro-detail-three-p").find(".icon-jiahao2").on('click',function () {
	if (parseInt($(".pro-detail-three-num").html())==1){
		$(".icon-jianhao11").css("color","red");
		$(".sell-out").hide();
	}
	  $(".pro-detail-three-num").html(parseInt($(".pro-detail-three-num").html())+1);
	  $(".pro-detail-four-num").html($(".pro-detail-three-num").html());
});

$(".add-to-car").tap(function(){
  		$('.ok-add-cart-mask').fadeIn();
  		
	setTimeout(function  () {
		$('.ok-add-cart-mask').fadeOut()
	},1300)
	});
    $(".right-icon-tap").tap(function(){
  	$(".ok-add-cart-mask").hide()
  });
//轮播图的改变
/*E product-details*/
/*S confirm-order*/
$(".confirm-order3-three-ul li").tap(function () {
	$(this).css("color","red").siblings().css("color","black");
});

/*E confirm-order*/
/*S index*/
$(".shopping-car-change-price>.icon-jiahao2").tap(function(){
	var aaa= parseInt($(this).parent().find("span").html());
//	console.log(aaa);
	$(this).parent().find("span").html(aaa+1);
	if (aaa==0) {
		console.log($(this).css("color"));
		$(this).parent().find(".icon-jianhao1").css("color","#FF0000");
	}
});
$(".shopping-car-change-price>.icon-jianhao1").tap(function(){
	var aaa= parseInt($(this).parent().find("span").html());
//	console.log(aaa)
	if (aaa>0) {
		$(this).parent().find("span").html(aaa-1);
	} else{
		return false;
	};
	if (aaa==1) {
			$(this).css("color","#ccc");
	}
});

//商品列表ajax
var ajaxLi =  $(".guess-you-like-li");
ajaxProducts()
	
	function ajaxProducts(){
		$.ajax({//获取json数据必写哦！！！
			type:"get",
			url:"json/lbyx.json",
			dataType:"json",
			success:function(data){//consol一下是很重要的！！！！！！
				//假如一页获取m条
				for(var i=0;i<data.homeList.length;i++){//加载json里面的图片，json里面数是从零开始的
					 var html= "<ol class=\"main-list-ol\">";
						 html+="<li class=\"main-list-ol-li1\"><img src=\""+data.homeList[i].img+"\"/></li>";
						 html+="<li class=\"main-list-ol-li2\"><p>"+data.homeList[i].name+"</p><p>¥"+data.homeList[i].price+"</p></li>";
						 html+="<li class=\"index-add-to-car\"><i class=\"iconfont icon-gouwuche3 buy-car-icon\"></i></li></ol>";
						ajaxLi.append(html);//通过不断地加载，但是点击之后ul又会清空来实现分页的效果
				}
				//首页点击，跳转页面，首页点击列表传参
				$(".main-list-ol-li1,.main-list-ol-li2").tap(function  () {
					 location.href = "product-details.html";//location.href实现客户端页面的跳转  	
					 var homeNum= $(this).parent(".main-list-ol").index();
					 window.sessionStorage.setItem("homeNum",homeNum);
				});
				//
				$(".index-add-to-car").each(function () {//ajax渲染出来的页面，特效也要写在ajax里面
					$(this).tap(function() {
						$.ajax({//获取json数据必写哦！！！
			type:"get",
			url:"json/lbyx.json",
			dataType:"json",
			success:function(data){//consol一下是很重要的！！！！！！
				//假如一页获取m条
				for(var i=0;i<data.homeList.length;i++){//加载json里面的图片，json里面数是从零开始的
					 var html= "<ol class=\"main-list-ol\">";
						 html+="<li class=\"main-list-ol-li1\"><img src=\""+data.homeList[i].img+"\"/></li>";
						 html+="<li class=\"main-list-ol-li2\"><p>"+data.homeList[i].name+"</p><p>¥"+data.homeList[i].price+"</p></li>";
						 html+="<li class=\"index-add-to-car\"><i class=\"iconfont icon-gouwuche3 buy-car-icon\"></i></li></ol>";
						ajaxLi.append(html);//通过不断地加载，但是点击之后ul又会清空来实现分页的效果
				}
				//首页点击，跳转页面，首页点击列表传参
				$(".main-list-ol-li1,.main-list-ol-li2").tap(function  () {
					 location.href = "product-details.html";//location.href实现客户端页面的跳转  	
					 var homeNum= $(this).parent(".main-list-ol").index();
					 window.sessionStorage.setItem("homeNum",homeNum);
				});
				//
				$(".index-add-to-car").each(function () {//ajax渲染出来的页面，特效也要写在ajax里面
					$(this).tap(function  () {
						
					});
				});
				
			}
			
		});
					});
				});
				
			}
			
		});
	}
	//S 加入购物车动态效果
//	$(".index-add-to-car").tap(function () {
//		alert("2")
//	})
//	
	
	
	
	
	
/*E index*/
/*S business-circle-choice*/
$(".add-main-ul li").tap(function () {
	$(this).css("color","red").siblings().css("color","#000000")
});
/*E business-circle-choice*/
 });
