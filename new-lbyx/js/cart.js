Zepto(function() {
	var userId = localStorage.getItem("userID");
	var lbyxCode = localStorage.getItem("lbyxCode");
	var goodsId = localStorage.getItem("goodsId");
	var universityId = localStorage.getItem("universityId");
	var repertoryId = localStorage.getItem("repertoryId");
	var goodsnums = parseInt($(".pro-detail-three-num").html());
	//获得跳转到主页的哪一个页面
	var indexPage = parseInt(localStorage.getItem("indexPage"));
//	console.log(userid)
//	cartShow();
//	function cartShow(){
	$.ajax({
			type:"get",
			url:"http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_get&token="+lbyxCode+"&UniversityId="+universityId+"",
			dataType:"json",
			success:function(data){
				console.log(data);
//				详情页点击加入购物车，然后购物车页面加入该条商品
				function addCart(obj){
//					console.log("1")
//				var html ="	<p class=\"shopping-car-nav\">东方一店</p>";
//					var html ="	<ul class=\"shopping-cart-ul\">";
					var html ="<li class=\"shopping-cart-li\">";
					html += "				<div class=\"shopping-cart-li-cell\"><i class=\"iconfont icon-duihao1 all-choice-right\"></i></div>";
					html += "				<div class=\"shopping-cart-li-cell\">";
					html += "					<img src=\"http://api.x5u.com.cn:12804"+obj.Img1+"\"/>";
					html += "				</div>";
					html += "				<div class=\"shopping-cart-li-cell\">";
					html += "					<p class=\"car-cell-right-p\">"+obj.GoodsName+"</p>";
					html += "					<p class=\"car-cell-right-p\">";
					html += "						<span class=\"shopping-car-cell-price\"  >￥"+obj.ActualUnitPrice+"</span>";
					html += "						<span class=\"shopping-car-cell-delete\">删除</span>";
					html += "						<span class=\"shopping-car-change-price\"  goodID=\""+obj.GoodsID+"\">";
					html += "							<i class=\"iconfont icon-jianhao1 cart-jiahao\" style=\"float: left;color: red\"></i>";
					html += "							<span class=\"cart-number-span\">"+obj.GoodsNum+"</span>";
					html += "							<i class=\"iconfont icon-jiahao2 cart-jiahao\" style=\"color: red\"></i>";
					html += "						</span>";
					html += "					</p>";
					html += "					</p>";
					html += "				</div>";
					html += "				<div class=\"shopping-car-delete\">";
					html += "					<span class=\"shopping-car-delete-span\">删除</span>";
					html += "				</div>";
					html += "			</li>";
//					html += "	</ul>";
					$(".shopping-cart-ul").append(html);
				}
//				console.log(data.Result.list_SpecDiscount[0].list_CartGoodsDetails[0])
				for (var i = 0; i < data.Result.list_SpecDiscount[0].list_CartGoodsDetails.length; i++) {
					addCart(data.Result.list_SpecDiscount[0].list_CartGoodsDetails[i]);
				}
			  
////cart加号点击页面特效，数字操作				
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
//$(this).css("colosr","#ccc");
		}
	});
//cart购物车点击对号，实现颜色的变换
	$(".all-choice-right").tap(function () {
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
	function RefreshCartNumber (userid,cartGoodId,cartNumberSpan) {
		$.ajax({
			url: "php/cart.php",  //注册地址
			type:"get",
			data:{
				userID:userid,
				goodID:cartGoodId,
				goodnum:cartNumberSpan
			},
			success:function(data){
		}
		});//ajax
	}//RefreshCartNumber
//cart对号操作时向数据库添加数据
	function readyToBuy (userid,cartGoodId,goodready) {
		$.ajax({
			url: "php/ready-purchase.php",  //注册地址
			type:"get",
			data:{
				userID:userid,
				goodID:cartGoodId,
				goodReady:goodready
			},
			success:function(data){
		}
		});//ajax
	}//readyToBuy
//confirm-order点击去购买，将用户姓名，电话，住址加入数据库t_user表格
	$(".confirm-order-to-pay").tap(function () {
	var  clientName = $(".confirm-order-name").val();
    var  clientPhone = $(".confirm-order-phone").val();
	var  clientAddress = $(".confirm-order-address").val();
		if(clientName==""||clientPhone==""||clientAddress==""){
			alert("各项内容不可为空");
		}else{
			$.ajax({
				url: "php/confirm-order.php",  //注册地址
				type:"get",
				data:{
					userID:userid,
					clientName:clientName,
					clientPhone:clientPhone,
					clientAddress:clientAddress
				},
				success:function(data){
					console.log(data);
				}
			});//ajax
			window.location.href = "purchase.html";
		}
		
	})
//cart加号点击数据库特效
	$(".cart-jiahao").tap(function () {
		var cartGoodId = $(this).parent(".shopping-car-change-price").attr("goodID");
		var cartNumberSpan = $(this).parent(".shopping-car-change-price").find(".cart-number-span").html();
//		var goodready = 1;
	//	alert(cartNumberSpan);
		var duihaoColor = $(this).parents(".shopping-cart-li").find(".all-choice-right").css("color");
		RefreshCartNumber (userid,cartGoodId,cartNumberSpan);
		if (duihaoColor=='red') {
//			readyToBuy (userid,cartGoodId,goodready);
			cartTotalPrice ();
		}else{
			return false;
		}
	});
//cart减号点击数据库特效
	$(".cart-jianhao").tap(function () {
	var cartGoodId = $(this).parent(".shopping-car-change-price").attr("goodID");
	var cartNumberSpan = $(this).parent(".shopping-car-change-price").find(".cart-number-span").html();
//	alert(cartNumberSpan);
	RefreshCartNumber (userids,cartGoodId,cartNumberSpan);
	if (duihaoColor=='red') {
//		readyToBuy (userid,cartGoodId,goodready);
		cartTotalPrice ();
	}else{
		return false;
	}
});
//cart删除特效
	$(".shopping-car-cell-delete").tap(function () {
	$(this).parents(".shopping-cart-li").find(".all-choice-right").css("color","#ccc");
	$(this).parents(".shopping-cart-li").hide();
	cartTotalPrice();
	var cartGoodId = $(this).parent(".car-cell-right-p").find(".shopping-car-change-price").attr("goodID");
	var cartNumberSpan =0;
	RefreshCartNumber (userid,cartGoodId,cartNumberSpan);
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
		$(".shopping-cart-li").each(function () {
//				console.log($(this))
				var cartGoodId = $(this).find(".shopping-car-change-price").attr("goodID");
				if ($(this).find(".all-choice-right").css("color")=="red") {
//					console.log(userid);
//					console.log(cartGoodId);
					var goodready = 1;
					readyToBuy(userid,cartGoodId,goodready);
				}else{
					var goodready =0;
					readyToBuy(userid,cartGoodId,goodready);
				}
				
			})
		var allPrice = $(".all-choice-price").html();
		localStorage.setItem("allPrice",allPrice);
		
		if (allPrice==0) {
			alert("请选择商品");
		} else{
			window.location.href = "confirm-order.html";
		}
		
	})
			
			}//success
		});//ajax
		
//点击index的商品分类。跳转页面并分类
	$(".classification-of-goods").tap(function () {
		window.location.href = "all-goods.html";
	});
//purchase页面，点击确定购买，数据库goodbuy设为一
    $(".confirm-to-pay").tap(function () {
    	var goodBuy = 1;
    	$.ajax({
			url: "php/purchase.php",  //注册地址
			type:"get",
			data:{
				userID:userid,
				goodBuy:goodBuy
			},
			success:function(data){
				alert("购买成功!");
		}
		});//ajax

			});
//		
});