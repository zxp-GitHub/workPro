Zepto(function() {
	
 $('.footer-ul li').on('tap',function(){
        $(this).addClass('active').siblings().removeClass('active');
         $(this).css("color","red").siblings().css("color","#000");
        $('.big-ul>li').hide().eq($(this).index()).show();
        //$('.big-ul li')会报错，是指所有的li
   });


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
//首页点击返回，返回到上一页-css已经改了
$(".top-back-li").tap(function () {
	window.history.back();
});
//商圈的选择
var selectAreaTwoLi = localStorage.getItem("selectAreaTwoLi");
$(".first-top-change-span").html(selectAreaTwoLi);
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
						 html+="<li><i class=\"iconfont icon-gouwuche3 buy-car-icon\"></i></li></ol>";
						ajaxLi.append(html);//通过不断地加载，但是点击之后ul又会清空来实现分页的效果
				}
				//首页点击，跳转页面，首页点击列表传参
				$(".main-list-ol-li1,.main-list-ol-li2").tap(function  () {
					 location.href = "product-details.html";//location.href实现客户端页面的跳转  	
					 var homeNum= $(this).parent(".main-list-ol").index();
					 window.sessionStorage.setItem("homeNum",homeNum);
				});
				//
				$(".buy-car-icon").each(function () {
					$(this).tap(function  () {
						console.log("3")
					});
				});
				
			}
			
		});
	}
/*E index*/
 });
