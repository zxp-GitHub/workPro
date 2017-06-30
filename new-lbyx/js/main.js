Zepto(function() {
	//当用户登录成功后，获取status中的code，确定用户的token---在商品详情页加入购物车时
	var lbyxCode = localStorage.getItem("lbyxCode");
	var goodsId = localStorage.getItem("goodsId");
	//获得跳转到主页的哪一个页面
	var indexPage = parseInt(localStorage.getItem("indexPage"));
	if (indexPage!=0&&indexPage!=1&&indexPage!=2) {
		indexPage = 0;
	}
	$(".footer-li").eq(indexPage).addClass("color-red").siblings().removeClass("color-red");
	$('.big-ul>li').hide().eq(indexPage).show();
	//获得商圈，商圈ID
	localStorage.setItem("universityId","28f95547-16f0-49eb-aace-d8a42e1f94fa");//先给商圈一个初值之后登录时再根据定位改
	var selectAreaTwoLi = localStorage.getItem("selectAreaTwoLi");
	if (selectAreaTwoLi == null) {
		localStorage.setItem("selectAreaTwoLi","罗庄金海汇");
	} 
	//点击主页选项卡页面切换，按钮颜色改变
	$('.footer-ul li').on('tap',function(){
 		localStorage.setItem("indexPage",$(this).index());
        $(this).addClass('color-red').siblings().removeClass('color-red');
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
	
	//点击加入购物车，弹出提示框
	$(".add-to-car").tap(function(){
//		console.log(universityId)//商圈的获得
		var universityId = localStorage.getItem("universityId");
		var repertoryId = localStorage.getItem("repertoryId");
		var goodsnums = parseInt($(".pro-detail-three-num").html());
		console.log(goodsnums);
			$.ajax({
			type:"get",
			url:"http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+repertoryId+"&Num="+goodsnums+"&UniversityId="+universityId+"&Checked=false&",
			dataType:"json",
			success:function(data){
				//商品图片的渲染
				console.log(data);
			}//success
		});//ajax
		
		
  		$('.ok-add-cart-mask').fadeIn();
		setTimeout(function  () {
			$('.ok-add-cart-mask').fadeOut()
		},1300);
	});
	//点击小对号，弹出框隐藏
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
//	$(".shopping-car-change-price>.icon-jiahao2").tap(function(){
//		var aaa= parseInt($(this).parent().find("span").html());
//		$(this).parent().find("span").html(aaa+1);
//		if (aaa==0) {
//			console.log($(this).css("color"));
//			$(this).parent().find(".icon-jianhao1").css("color","#FF0000");
//		}
//	});
//	$(".shopping-car-change-price>.icon-jianhao1").tap(function(){
//		var aaa= parseInt($(this).parent().find("span").html());
//	//	console.log(aaa)
//		if (aaa>0) {
//			$(this).parent().find("span").html(aaa-1);
//		} else{
//			return false;
//		};
//		if (aaa==1) {
//				$(this).css("color","#ccc");
//		}
//	});
	//商品列表ajax
	ajaxProducts(1);
	//下拉加载
//	$(document).ready(function() { //这句话是要用的
		var oWrap = $(".guess-you-like-scroll");
		var firstScrollPage = 2;//因为ajaxProducts(1);初始化是从1开始的，所以赋初值的时候就要从2开始，否则就会重复
		oWrap.scroll(function() { //只要不是钟表都不用计时器，滚动条监听有这个专门的方法，要配合ready来用。
			if(oWrap.height() + $(this).scrollTop() >= $(".guess-you-like-min-scroll").height()) {
				console.log(firstScrollPage);
				ajaxProducts(firstScrollPage);//也可以将加1和调用语句调换顺序，初值firstScrollPage就可为1
				firstScrollPage = parseInt(firstScrollPage)+1;//这个地方不要加var，否则会无法console.log(firstScrollPage);为null
			}
		}); //E scroll
//	}); //E ready
		function ajaxProducts(firstScrollPage){
			var universityId = localStorage.getItem("universityId");
			var userId = localStorage.getItem("userId");
			var selectAreaOneLi = localStorage.getItem("selectAreaOneLi");
//			console.log(universityId);
//			console.log(userId);
//			console.log(selectAreaOneLi);
			$.ajax({//获取json数据必写哦！！！
				type:"get",
				url:"http://api.x5u.com.cn:12804/School/CommonInterface.aspx?RegionName=0&action=Related_get1&dataindex="+firstScrollPage+"&datasize=10&operation=6&universityid="+universityId+"",
				dataType:"json",
				success:function(data){//consol一下是很重要的！！！！！！
					//假如一页获取m条
					console.log(data.result.tuijian)
					for(var i=0;i<data.result.tuijian.length;i++){//加载json里面的图片，json里面数是从零开始的
						 var html= "<ol class=\"main-list-ol\" goodsId=\""+data.result.tuijian[i].GoodsID+"\" repertoryId = \""+data.result.tuijian[i].RepertoryID+"\">";
							 html+="<li class=\"main-list-ol-li1\"><img src=\"http://api.x5u.com.cn:12804"+data.result.tuijian[i].Img1+"\"/></li>";
							 html+="<li class=\"main-list-ol-li2\"><p>"+data.result.tuijian[i].GoodsName+"</p><p>¥"+data.result.tuijian[i].SalePrice+"</p></li>";
							 html+="<li><i class=\"iconfont icon-gouwuche3 buy-car-icon\"></i></li></ol>";
							$(".guess-you-like-li").append(html);//通过不断地加载，但是点击之后ul又会清空来实现分页的效果
					}
					//首页点击，跳转页面，首页点击列表传参
					$(".main-list-ol").tap(function  () {
						console.log($(this).attr("goodsId"));
						 localStorage.setItem("goodsId",$(this).attr("goodsId"));
						 localStorage.setItem("repertoryId",$(this).attr("repertoryId"));
						 location.href = "product-details.html";//location.href实现客户端页面的跳转  	
//						 var homeNum= $(this).parent(".main-list-ol").index();
//						 window.sessionStorage.setItem("homeNum",homeNum);
					});
					//
					$(".buy-car-icon").each(function () {
						$(this).tap(function  () {
							console.log("3")
						});
					});
					
					
				}//success
				
			});
		}
	
	/*E index*/
 });
