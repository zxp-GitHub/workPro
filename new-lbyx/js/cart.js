Zepto(function() {
	var userId = localStorage.getItem("userID");
	var lbyxCode = localStorage.getItem("lbyxCode");
	var goodsId = localStorage.getItem("goodsId");
	var universityId = localStorage.getItem("universityId");
	var repertoryId = localStorage.getItem("repertoryId");
	var goodsnums = parseInt($(".pro-detail-three-num").html());
	var indexPage = parseInt(localStorage.getItem("indexPage"));
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
					var html ="<li class=\"shopping-cart-li\" GoodsNum = \""+obj.GoodsNum+"\" Checked = \""+obj.Checked+"\">";
					html += "				<div class=\"shopping-cart-li-cell\"><i class=\"iconfont icon-duihao1 all-choice-right\" goodID=\""+obj.RepertoryID+"\"></i></div>";
					html += "				<div class=\"shopping-cart-li-cell\">";
					html += "					<img src=\"http://api.x5u.com.cn:12804"+obj.Img1+"\"/><p class=\"cart-no-goods-mask\">商品已售罄</p>";
					html += "				</div>";
					html += "				<div class=\"shopping-cart-li-cell\">";
					html += "					<p class=\"car-cell-right-p\">"+obj.GoodsName+"</p>";
					html += "					<p class=\"car-cell-right-p\">";
					html += "						<span class=\"shopping-car-cell-price\"  >￥"+obj.ActualUnitPrice+"</span>";
					html += "						<span class=\"shopping-car-cell-delete\" cartCGID = \""+obj.CGID+"\">删除</span>";
					html += "						<span class=\"shopping-car-change-price\"  goodID=\""+obj.RepertoryID+"\">";
					html += "							<i class=\"iconfont icon-jianhao1 cart-jianhao\" style=\"float: left;color: red\"></i>";
					html += "							<span class=\"cart-number-span\">"+obj.Num+"</span>";
					html += "							<i class=\"iconfont icon-jiahao2 cart-jiahao\" style=\"color: red\"></i>";
					html += "						</span>";
					html += "					</p>";
					html += "					</p>";
					html += "				</div>";
					html += "			</li>";
//					html += "	</ul>";
					$(".shopping-cart-ul").prepend(html);
				}
//				console.log(data.Result.list_SpecDiscount[0].list_CartGoodsDetails[0])
				for (var i = 0; i < data.Result.list_SpecDiscount[0].list_CartGoodsDetails.length; i++) {
					addCart(data.Result.list_SpecDiscount[0].list_CartGoodsDetails[i]);
				}
	//刷新时，选中状态和售罄状态的显示
	$(".shopping-cart-li").each(function () {
					console.log($(this).attr("GoodsNum"));
					//如果库存数量为零，提示商品已售罄的遮罩层显示
					if ($(this).attr("GoodsNum")==0) {
					$(this).find(".cart-no-goods-mask").show();
					}
					//刷新页面时，点击选中后，刷新状态不变
					if($(this).attr("Checked")=="true"){
						$(this).find(".all-choice-right").css("color","red");
					}
				})
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
		
	});
	//购物车全选操作
	$(".all-choice-p").tap(function () {
		if($(this).find("i").css("color")=='rgb(204, 204, 204)'){
			$(".shopping-cart-li").each(function () {
				var cartGoodId = $(this).find(".all-choice-right").attr("goodID");//加引号
				console.log($(this).attr("GoodsNum"));
			if($(this).attr("GoodsNum")==0){
				return true;//不知道为什么，这个写false，全选的时候就会有的选不中。
			}else{
				if ($(this).attr("GoodsNum")<parseInt($(this).find(".cart-number-span").html())) {
					alert("商品库存不足！");
					return true;
				}else{
					$(this).find(".all-choice-right").css("color","red");
					var goodReady = true;
					readyToBuy (cartGoodId,goodReady);
				}
			}
			})
			$(this).find("i").css("color","red");
//			$(".all-choice-right").css("color","red");
			cartTotalPrice ();
		}else{
			$(".shopping-cart-li").each(function () {
				var cartGoodId = $(this).find(".all-choice-right").attr("goodID");//加引号
				console.log($(this).attr("GoodsNum"));
				//接下来双重判断，商品库存数既不能为零也不能小于选中的商品数量，因为不需要提示不同的信息，所以可以合并为一个判断
				if($(this).attr("GoodsNum")==0||$(this).attr("GoodsNum")<parseInt($(this).find(".cart-number-span").html())){
					return true;
				}else{
					$(this).find(".all-choice-right").css("color","rgb(204, 204, 204)");
					var goodReady = false;
					readyToBuy (cartGoodId,goodReady);
					cartTotalPrice();
				}
			})
			$(this).find("i").css("color","#ccc");
//			$(".all-choice-right").css("color","#ccc");
			cartTotalPrice ();
		}
	});
	//购物车增加商品数量
	function RefreshCartNumberJia (cartGoodId) {
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+cartGoodId+"&Num=1&UniversityId="+universityId+"&Checked=false", 
			type:"get",
			dataType:"json",
			success:function(data){
			//console.log(data)
			}
		});//ajax
	}//RefreshCartNumber
	//购物车减少商品数量
	function RefreshCartNumberJian (cartGoodId) {
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+cartGoodId+"&Num=-1&UniversityId="+universityId+"&Checked=false", 
			type:"get",
			dataType:"json",
			success:function(data){
			//console.log(data)
			}
		});//ajax
	}//RefreshCartNumber
	//购物无车删除操作
	function deleteCartGood (cartGoodId) {
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCart.aspx?Token="+lbyxCode+"&action=ShoppingCart_get&cgid="+cartGoodId+"&operation=99", 
			type:"get",
			dataType:"json",
			success:function(data){
			}
		});//ajax
	}//RefreshCartNumber
	//cart对号操作时checked值改变
	function readyToBuy (cartGoodId,goodready) {
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+cartGoodId+"&Num=0&UniversityId="+universityId+"&Checked="+goodready+"",  //注册地址
			type:"get",
			dataType:"json",
			success:function(data){
//				console.log(data);
//				if(data.ResultCode==23){
//					alert("库存不足");
//				}
			}
		});//ajax
	}//readyToBuy
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
			//console.log($(this).find(".all-choice-right").css("red"))
			if ($(this).find(".all-choice-right").css("color")=="red") {
				cartAllPrice += oCartSum;
			}
		});
			//console.log(cartAllPrice);   !!!很重要，可以看该方法在点击时是否都有效
			$(".all-choice-price").html(cartAllPrice.toFixed(2));
	}//cartTotalPrice
	//cart购物车点击对号，实现颜色的变换
	$(".all-choice-right").tap(function () {
		var cartGoodId = $(this).attr("goodID");//加引号
		if($(this).css("color")=='rgb(204, 204, 204)'){
			console.log($(this).parents(".shopping-cart-li").attr("GoodsNum"));
			if($(this).parents(".shopping-cart-li").attr("GoodsNum")==0){
				alert("商品已售罄！");
				return false;
			}else{
				if ($(this).parents(".shopping-cart-li").attr("GoodsNum")<parseInt($(this).parents(".shopping-cart-li").find(".cart-number-span").html())) {
					alert("商品库存不足！");
					return false;
				}else{
					$(this).css("color","red");
					var goodReady = true;
					readyToBuy (cartGoodId,goodReady);
					cartTotalPrice();
				}
				
			}
		}else{
			$(this).css("color","#ccc");
			var goodReady = false;
			readyToBuy (cartGoodId,goodReady);
			cartTotalPrice();
		}
	});
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
//		var cartNumberSpan = $(this).parent(".shopping-car-change-price").find(".cart-number-span").html();
//		var goodready = 1;
//		alert(cartGoodId);
		var duihaoColor = $(this).parents(".shopping-cart-li").find(".all-choice-right").css("color");
		RefreshCartNumberJia (cartGoodId);
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
		var duihaoColor = $(this).parents(".shopping-cart-li").find(".all-choice-right").attr("color");
//		var aaa= parseInt($(this).parent().find("span").html());
		if (cartNumberSpan>1) {
			$(this).parent().find("span").html(cartNumberSpan-1);
			RefreshCartNumberJian (cartGoodId);
		} else{
			return false;
		};
//		if (cartNumberSpan==2) {
//		}
//		console.log(duihaoColor);
		//	alert(cartNumberSpan);
//		if(cartNumberSpan==1){
//			return false;
//		}else{
//			
//		}
//		if (duihaoColor=='red') {
//			readyToBuy (userid,cartGoodId,goodready);
//			cartTotalPrice ();
//		}else{
//			return false;
//		}
});
	//cart删除特效
	$(".shopping-car-cell-delete").tap(function () {
		$(this).parents(".shopping-cart-li").find(".all-choice-right").css("color","#ccc");
		$(this).parents(".shopping-cart-li").hide();
		cartTotalPrice();
		var cartGoodId = $(this).parent(".car-cell-right-p").find(".shopping-car-change-price").attr("goodID");
		var cartNumberSpan =0;
		var cartCGID = $(this).attr("cartCGID");//加引号
		deleteCartGood (cartCGID);
	});
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

});