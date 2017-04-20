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
    })
/*E all-goods*/



/*S product-details*/
 
/*E product-details*/
 });
