 $(function  () {
 $('.footer-ul li').on('tap',function(){
        $(this).addClass('active').siblings().removeClass('active');
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
   }
});

$(".pro-detail-three-p").find(".icon-jiahao2").on('click',function () {
	if (parseInt($(".pro-detail-three-num").html())==1){
		$(".icon-jianhao11").css("color","red");
	}
	  $(".pro-detail-three-num").html(parseInt($(".pro-detail-three-num").html())+1);
	  $(".pro-detail-four-num").html($(".pro-detail-three-num").html());
});

//轮播图
 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    longSwipes : false,
    loop: true,
//  onlyExternal : false,
    autoplay : 2000,
    autoplayDisableOnInteraction : false,//禁止自动播放的作用
    // 如果需要分页器
    pagination: '.swiper-pagination',
  });
  $(".add-to-car").tap(function(){
  		$('.ok-add-cart-mask').fadeIn();
  		
	setTimeout(function  () {
		$('.ok-add-cart-mask').fadeOut()
//		$('.ok-add-cart-mask').hide();
//		$('.ok-add-cart-mask').animate({ opacity: 0}, 500, 'ease-out')
	},1300)
	});
    $(".right-icon-tap").tap(function(){
  	$(".ok-add-cart-mask").hide()
  });
  
/*E product-details*/
/*S confirm-order*/

/*E confirm-order*/
/*S index*/
$(".shopping-car-change-price>.icon-jiahao2").tap(function(){
	var aaa= parseInt($(this).parent().find("span").html());
	console.log(aaa);
	$(this).parent().find("span").html(aaa+1);
	if (aaa==0) {
		console.log($(this).css("color"));
		$(this).parent().find(".icon-jianhao1").css("color","#FF0000");
	}
});
$(".shopping-car-change-price>.icon-jianhao1").tap(function(){
	var aaa= parseInt($(this).parent().find("span").html());
	console.log(aaa)
	if (aaa>0) {
		$(this).parent().find("span").html(aaa-1);
	} else{
		return false;
	};
	if (aaa==1) {
			$(this).css("color","#ccc");
	}
});


/*E index*/
 });
