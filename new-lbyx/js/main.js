Zepto(function() {
	//当用户登录成功后，获取status中的code，确定用户的token---在商品详情页加入购物车时
	var goodsId = localStorage.getItem("goodsId");
	var	userId = localStorage.getItem("userId");
	var lbyxCode = localStorage.getItem("lbyxCode");
	var repertoryId = localStorage.getItem("repertoryId");
	var Nickname = localStorage.getItem("Nickname");
//	console.log(Nickname);
	$(".my-first-p").html(Nickname);
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

/*S confirm-order*/
	$(".confirm-order3-three-ul li").tap(function () {
		$(this).css("color","red").siblings().css("color","black");
	});
/*E confirm-order*/
/*S index*/
/*S index-first*/	
	//首页点击返回，返回到上一页-css已经改了
	$(".top-back-li").tap(function () {
		window.history.back();
	});
	//index-my-判断是否登录
//	console.log(lbyxCode);
//	alert(lbyxCode);
	if(lbyxCode==""||lbyxCode==null){
		$(".my-first-a").hide();
		$(".my-first-b").show();
	}else{
		$(".my-first-b").hide();
		$(".my-first-a").show();
	}
	//商圈的选择
	var selectAreaTwoLi = localStorage.getItem("selectAreaTwoLi");
	$(".first-top-change-span").html(selectAreaTwoLi);
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
//					console.log(data.result.tuijian)
					for(var i=0;i<data.result.tuijian.length;i++){//加载json里面的图片，json里面数是从零开始的
						 var html= "<ol class=\"main-list-ol\" goodNum = \""+data.result.tuijian[i].GoodsNum+"\" goodsId=\""+data.result.tuijian[i].GoodsID+"\" repertoryId = \""+data.result.tuijian[i].RepertoryID+"\">";
							 html+="<li class=\"main-list-ol-li1\"><img src=\"http://api.x5u.com.cn:12804"+data.result.tuijian[i].Img1+"\"/><span class=\"home-ol-sell-out\">售罄</span></li>";
							 html+="<li class=\"main-list-ol-li2\"><p>"+data.result.tuijian[i].GoodsName+"</p><p>¥"+data.result.tuijian[i].SalePrice+"</p></li>";
							 html+="<li><i class=\"iconfont icon-gouwuche3 buy-car-icon\"></i></li></ol>";
							$(".guess-you-like-li").append(html);//通过不断地加载，但是点击之后ul又会清空来实现分页的效果
					}
					//首页点击，跳转页面，首页点击列表传参
					$(".main-list-ol").tap(function  () {
//						 console.log($(this).attr("goodsId"));
						 localStorage.setItem("goodsId",$(this).attr("goodsId"));
						 localStorage.setItem("repertoryId",$(this).attr("repertoryId"));
//						 location.href = "product-details.html";//location.href实现客户端页面的跳转  	
//						 var homeNum= $(this).parent(".main-list-ol").index();
//						 window.sessionStorage.setItem("homeNum",homeNum);
					});
					//点击跳转页面
					$(".main-list-ol-li1,.main-list-ol-li2").tap(function () {
						window.location.href = "product-details.html";//location.href实现客户端页面的跳转  	
					});
					//点击首页购物车图标加入购物车
					$(".main-list-ol").each(function () {
//						console.log($(this).attr("goodNum"));
						if ($(this).attr("goodNum")=="0") {
							$(this).find(".home-ol-sell-out").show();
						}else{
							$(this).find(".buy-car-icon").tap(function () {
								var repertoryId = $(this).parents(".main-list-ol").attr("repertoryId");
	//							console.log(repertoryId);
								$.ajax({
								type:"get",
								url:"http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+repertoryId+"&Num=1&UniversityId="+universityId+"&Checked=false&",
								dataType:"json",
								success:function(data){
									//商品图片的渲染
									alert("加入购物车成功！");
								}//success
								});//ajax
							});
						}
						
						
					});
				}//success
			});
		}
     //获取首页的链接图标
     var universityId = localStorage.getItem("universityId");
     $.ajax({
		url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=get_universityid&operation=0&universityid="+universityId+"",  //注册地址
		type:"get",
		dataType:"json",
		success:function(data){
//				console.log(data);
			}
		});//ajax
		//首页推荐列表
		 $.ajax({
		url: "http://x5u.com.cn:12804/School/CommonInterface.aspx?action=Related_get&operation=2",  //注册地址
		type:"get",
		dataType:"json",
		success:function(data){
//				console.log(data);
				$(".home-main-li-p1").html(data.result.data[0].text);
				$(".home-main-li-p2").html(data.result.data[1].text);
				$(".home-main-li-p3").html(data.result.data[2].text);
				$(".home-main-li1-pic").attr("src","http://x5u.com.cn:12804"+data.result.data[0].GoodsTypeImg);
				$(".home-main-li2-pic").attr("src","http://x5u.com.cn:12804"+data.result.data[1].GoodsTypeImg);
				$(".home-main-li3-pic").attr("src","http://x5u.com.cn:12804"+data.result.data[2].GoodsTypeImg);
				$(".home-main-li1").tap(function () {
					
					localStorage.setItem("allGoodsPicID",data.result.data[0].value);
					window.location.href = "select-area-three.html";
				});
				$(".home-main-li2").tap(function () {
//					data.result.data[1].value
					localStorage.setItem("allGoodsPicID",data.result.data[1].value);
					window.location.href = "select-area-three.html";
				});
				$(".home-main-li3").tap(function () {
//					data.result.data[2].value
					localStorage.setItem("allGoodsPicID",data.result.data[2].value);
					window.location.href = "select-area-three.html";
				});
			}
		});//ajax
		
		$(".home-main-li4").tap(function () {
			window.location.href = "all-goods.html";
		});
/*E index-first*/	
	
/*S index-my*/
    //点击头像切换图片，或者自己照
//  $(".my-first-pic").tap(function () {
//  	window.location.href = "index-my-user-info.html";
//  });
	//点击全部订单，页面跳转
    $(".my-second-li1").tap(function () {
    	window.location.href = "my-order.html";
    });
    //点击退货弹出对话框
    $(".my-second-li-return-goods").tap(function () {
    	alert("网页端暂不支持退货，您可下载来宝优选app进行退货处理");
    });
    //点击头像弹出退出遮罩层
    $(".logout-login-p2-span1").tap(function () {
    	$(".confirm-logout-login-mask").hide();
    });
    $(".my-first-pic").tap(function () {
    	$(".confirm-logout-login-mask").show();
    });
    
    $(".logout-login-p2-span2").tap(function () {
    	localStorage.setItem("lbyxCode","");
    	$(".confirm-logout-login-mask").hide();
    	window.location.reload();
    });
//  $(".my-first-pic").tap(function () {
//  });
/*S index-cart*/
//点击购物车，刷新页面
$(".footer-li").eq(1).tap(function () {
	window.location.reload();
});
/*E index-cart*/
/*E index*/
 });//end
