Zepto(function() {
	var userids = window.location.search.split("=")[1];
	cartShow(userids);
	function cartShow(userid){
	$.ajax({
			type:"get",
			url:"php/cart2.php",
			dataType:"json",
			data:{
				userID:userid
			},
			success:function(data){
//				console.log(data.length);
				function addCart(obj){
//					console.log("1")
				var html = "<li class=\"shopping-cart-li\">";
					html += "				<div class=\"shopping-cart-li-cell\"><i class=\"iconfont icon-duihao1 all-choice-right\"></i></div>";
					html += "				<div class=\"shopping-cart-li-cell\">";
					html += "					<img src=\""+obj.goodsrc+"\"/>";
					html += "				</div>";
					html += "				<div class=\"shopping-cart-li-cell\">";
					html += "					<p class=\"car-cell-right-p\">"+obj.goodname+"</p>";
					html += "					<p class=\"car-cell-right-p\">";
					html += "						<span class=\"shopping-car-cell-price\"  >￥"+obj.goodprice+"</span>";
					html += "						<span class=\"shopping-car-cell-delete\">删除</span>";
					html += "						<span class=\"shopping-car-change-price\"  goodID=\""+obj.goodID+"\">";
					html += "							<i class=\"iconfont icon-jianhao1 cart-jiahao\" style=\"float: left;color: red\"></i>";
					html += "							<span class=\"cart-number-span\" style=\"padding: 0rem 0.3rem 0.2rem; \">"+obj.goodnumber+"</span>";
					html += "							<i class=\"iconfont icon-jiahao2 cart-jiahao\" style=\"color: red\"></i>";
					html += "						</span>";
					html += "					</p>";
					html += "					</p>";
					html += "				</div>";
					html += "				<div class=\"shopping-car-delete\">";
					html += "					<span class=\"shopping-car-delete-span\">删除</span>";
					html += "				</div>";
					html += "			</li>";
					$(".shopping-cart-ul").append(html);
					}
				for (var i = 0; i < data.length; i++) {
					addCart(data[i]);
				}
						
//cart加号点击页面特效，数字操作				
	$(".shopping-car-change-price>.icon-jiahao2").tap(function(){
	var aaa= parseInt($(this).parent().find("span").html());
	$(this).parent().find("span").html(aaa+1);
	if (aaa>0) {
//		console.log($(this).parent().find(".icon-jianhao1").css("color"));
		$(this).parent().find(".icon-jianhao1").css("color","red");
	}
});
//cart减号点击页面特效，数字操作
	$(".shopping-car-change-price>.icon-jianhao1").tap(function(){
		var aaa= parseInt($(this).parent().find("span").html());
		if (aaa>1) {
			$(this).parent().find("span").html(aaa-1);
		} else{
			return false;
		};
		if (aaa==2) {
//				$(this).css("colosr","#ccc");
		}
	});
//购物车点击对号，实现颜色的变换
	$(".all-choice-right").tap(function () {
//	alert($(this).css("color"))
	if($(this).css("color")=='rgb(204, 204, 204)'){
		$(this).css("color","red");
		cartTotalPrice();
	}else{
		$(this).css("color","#ccc");
		cartTotalPrice();
	}
});
//购物车全选操作
	$(".all-choice-p").tap(function () {
//	alert($(this).find("i").css("color"));
	if($(this).find("i").css("color")=='rgb(204, 204, 204)'){
		$(this).find("i").css("color","red");
		$(".all-choice-right").css("color","red");
		cartTotalPrice ();
	}else{
		$(this).find("i").css("color","#ccc");
		$(".all-choice-right").css("color","#ccc");
		cartTotalPrice ();
	}
});
//购物车加减时，数据库会改变数值的大小
	function RefreshCartNumber (userids,cartGoodId,cartNumberSpan) {
	$.ajax({
		url: "php/cart.php",  //注册地址
		type:"get",
		data:{
			userID:userids,
			goodID:cartGoodId,
			goodnum:cartNumberSpan
		},
		success:function(data){
	}
	});//ajax
}//RefreshCartNumber
//cart加号点击数据库特效
	$(".cart-jiahao").tap(function () {
	var cartGoodId = $(this).parent(".shopping-car-change-price").attr("goodID");
	var cartNumberSpan = $(this).parent(".shopping-car-change-price").find(".cart-number-span").html();
//	alert(cartNumberSpan);
	RefreshCartNumber (userids,cartGoodId,cartNumberSpan);
	cartTotalPrice ();
});
//cart减号点击数据库特效
	$(".cart-jianhao").tap(function () {
	var cartGoodId = $(this).parent(".shopping-car-change-price").attr("goodID");
	var cartNumberSpan = $(this).parent(".shopping-car-change-price").find(".cart-number-span").html();
//	alert(cartNumberSpan);
	RefreshCartNumber (userids,cartGoodId,cartNumberSpan);
	cartTotalPrice ();
});
//cart删除特效
	$(".shopping-car-cell-delete").tap(function () {
	$(this).parents(".shopping-cart-li").find(".all-choice-right").css("color","#ccc");
	$(this).parents(".shopping-cart-li").hide();
	cartTotalPrice();
	var cartGoodId = $(this).parent(".car-cell-right-p").find(".shopping-car-change-price").attr("goodID");
	var cartNumberSpan =0;
	RefreshCartNumber (userids,cartGoodId,cartNumberSpan);
});
//cart将选中对号的商品总价计算出来，封装成方法
	cartTotalPrice();
	function cartTotalPrice (){
		var cartAllPrice = 0;
		$(".shopping-cart-li").each(function () {
			var  oCartPrice = $(this).find(".shopping-car-cell-price").html();
			var oCartPrices =oCartPrice.split("/")[0];
			var oCartPricess =parseFloat(oCartPrices.split("￥")[1]) ;
			var oCartNumber = parseInt($(this).find(".cart-number-span").html());
			var oCartSum = oCartPricess*oCartNumber;
		//	console.log($(this).find(".all-choice-right").css("red"))
			if ($(this).find(".all-choice-right").css("color")=="red") {
				cartAllPrice += oCartSum;
			}
		});
//		console.log(cartAllPrice);   !!!很重要，可以看该方法在点击时是否都有效
		$(".all-choice-price").html(cartAllPrice);
	}//cartTotalPrice
//cart点击购买传参，跳转页面	
$(".cart-to-pay").tap(function () {
	window.location.href = "confirm-order.html"+window.location.search;
	var allPrice = $(".all-choice-price").html()
	localStorage.setItem("allPrice",allPrice);
})
			}//success
		});//ajax
		}//cartShow
		
		
		
		//点击index的商品分类。跳转页面并分类
		$(".classification-of-goods").tap(function () {
			window.location.href = "all-goods.html"+window.location.search;
		});
	
		
});