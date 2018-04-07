Zepto(function() {
	var userId = localStorage.getItem("userId");
	var lbyxCode = localStorage.getItem("lbyxCode");
	var goodsId = localStorage.getItem("goodsId");
	var universityId = localStorage.getItem("universityId");
	var repertoryId = localStorage.getItem("repertoryId");
	var goodsnums = parseInt($(".pro-detail-three-num").html());
	var indexPage = parseInt(localStorage.getItem("indexPage"));
//	console.log(lbyxCode);
//	console.log(universityId);
	//首页点击购物车图标，若是没登录，则跳转到登录页面
	$(".footer-li").eq(1).tap(function () {
		console.log(lbyxCode);
		if(lbyxCode==""||lbyxCode==null||userId==null||userId==""){
			window.location.href = "login.html";
		}else{
//			cartShows();
		}
//		if (data.Result.list_SpecDiscount.length==0) {
//			window.location.href = "login.html";
//		}
	});
//	function cartShows(){
		$.ajax({
			type:"get",
			url:"http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_get&token="+lbyxCode+"&UniversityId="+universityId+"",
			dataType:"json",
//			headers: {
////				  'User-Agent': "LBYX 1.0",
//				  'version':"html1.0",
//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//				  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
			success:function(data){
				if (data.ResultCode==23) {
					$(".cart-to-log-p").show();
					$(".my-first-a").hide();
					$(".my-first-b").show();
				}
				console.log(data);
//				详情页点击加入购物车，然后购物车页面加入该条商品
				function addCart(obj){
//				var html ="	<p class=\"shopping-car-nav\">东方一店</p>";
//					var html ="	<ul class=\"shopping-cart-ul\">";
					var html ="<li class=\"shopping-cart-li\" cartCGID =\""+obj.CGID+"\"  SpecialType= \""+obj.SpecialType+"\" SpecID = \""+obj.SpecID+"\" GoodsNum = \""+obj.GoodsNum+"\" SGID = \""+obj.SGID+"\" SpecialType = \""+obj.SpecialType+"\" IsInvalid= \""+obj.IsInvalid+"\" GoodsID = \""+obj.GoodsID+"\" Checked = \""+obj.Checked+"\">";
					html += "				<div class=\"shopping-cart-li-cell\"><i class=\"iconfont icon-duihao1 all-choice-right\" goodID=\""+obj.RepertoryID+"\"></i></div>";
					html += "				<div class=\"shopping-cart-li-cell shopping-cart-li-cell-pic\">";
					html += "					<img src=\"http://api.x5u.com.cn:12804"+obj.Img1+"\"/><p class=\"cart-no-goods-mask\">商品已售罄</p><p class=\"cart-flash-sale-mask\">限时抢购</p>";
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
					html += "					</p><span class=\"cart-invalid-mask\">失效！</span>";
//					html += "					</p>";
					html += "				</div>";
					html += "			</li>";
//					html += "	</ul>";
					$(".shopping-cart-ul").prepend(html);
				}
//				console.log(data.Result.list_SpecDiscount[0].list_CartGoodsDetails[0]);
				//如果购物车为空，给出提示，p显示
//				console.log(data.Result==undefind)
				if (data.Result.list_SpecDiscount.length==0) {
					$(".cart-num-null-p").show();
				}
//				console.log(data.Result.list_SpecDiscount.length);
				if (data.ResultCode!=23&&data.ResultCode==0&&data.Result.list_SpecDiscount.length>0) {	/* []z */
					for (var i = 0; i < data.Result.list_SpecDiscount[0].list_CartGoodsDetails.length; i++) {
						addCart(data.Result.list_SpecDiscount[0].list_CartGoodsDetails[i]);
					}
				}
	//点击图片跳转到详情页面
	$(".shopping-cart-li-cell-pic").tap(function () {
		localStorage.setItem("goodsId",$(this).parent(".shopping-cart-li").attr("GoodsID"));
		var SpecialType = $(this).parents(".shopping-cart-li").attr("SpecialType");
		if (SpecialType =="0") {//特卖
			var SpecID = $(this).parents(".shopping-cart-li").attr("SpecID");
			localStorage.setItem("flashSaleSpecID",SpecID);
//			localStorage.setItem("repertoryId",$(this).attr("flashRepertoryID"));
			window.location.href = "product-detail-sale.html";
		} else{
			window.location.href = "product-details.html";
		}
		
	});
	//点击index的商品分类。跳转页面并分类
	$(".classification-of-goods").tap(function () {
		window.location.href = "all-goods.html";
	});
	//刷新时，选中状态和售罄状态的显示
	$(".shopping-cart-li").each(function () {
		var cartGoodId = $(this).find(".shopping-car-change-price").attr("goodID");//加引号
		var SGID = $(this).attr("SGID");
		var SpecialType = $(this).attr("SpecialType");
		var cartCGID = $(this).attr("cartCGID");
		//如果库存数量为零，提示商品已售罄的遮罩层显示
		if ($(this).attr("GoodsNum")==0) {
		$(this).find(".cart-no-goods-mask").show();
		}
		//若是失效，失效标志显示，加减号隐藏，不让操作
		if ($(this).attr("IsInvalid")=="true") {
//			console.log(cartGoodId);
//			console.log(SGID);
//			console.log(SpecialType);
			$(this).find(".cart-invalid-mask").show();
//			$(this).find(".all-choice-right").hide();
			$(this).find(".shopping-car-change-price").hide();//加减号
			$(this).find(".all-choice-right").css("color","rgb(204,204,204)");
			Refreshcart (cartCGID);
			//去购买时，保持非选中状态
//			if (SpecialType =="0") {//特卖
//				SaleReadyToBuy (cartGoodId,false,SGID);
//			} else{
//				readyToBuy (cartGoodId,false);
//			}
		}
		//如果特卖种类显示是0，则是特卖;null则是普通商品
		if ($(this).attr("SpecialType")!="null") {
			$(this).find(".cart-flash-sale-mask").show();//null要加引号
		}
		//刷新页面时，点击选中后，刷新状态不变
		if($(this).attr("Checked")=="true"){
			$(this).find(".all-choice-right").css("color","red");
		}else{
			$(this).find(".all-choice-right").css("color","rgb(204, 204, 204)");
		}
	})
	//cart加号点击页面特效，数字操作+++
	$(".cart-jiahao").tap(function(){
			var aaa= parseInt($(this).parent().find("span").html());
			$(this).parent().find("span").html(aaa+1);
			if (aaa>0) {
				$(this).parent().find(".icon-jianhao1").css("color","red");
			}
	});
	//cart购物车点击对号，实现颜色的变换
	$(".all-choice-right").tap(function () {
		var cartGoodId = $(this).attr("goodID");//加引号
		var SGID = $(this).parents(".shopping-cart-li").attr("SGID");
		var SpecialType = $(this).parents(".shopping-cart-li").attr("SpecialType");
		if($(this).css("color")=='rgb(204, 204, 204)'){
//			console.log($(this).parents(".shopping-cart-li").attr("GoodsNum"));
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
					if (SpecialType =="0") {//特卖
//						alert("2");
						SaleReadyToBuy (cartGoodId,goodReady,SGID);
					} else{
						readyToBuy (cartGoodId,goodReady);
					}
					cartTotalPrice();
				}
			}
		}else{
			$(this).css("color","#ccc");
			var goodReady = false;
			if (SpecialType =="0") {//特卖
				SaleReadyToBuy (cartGoodId,goodReady,SGID)
			} else{
				readyToBuy (cartGoodId,goodReady);
			}
			cartTotalPrice();
		}
	});
	//cart加号点击数据库特效+++
	$(".cart-jiahao").tap(function () {
		var cartGoodId = $(this).parent(".shopping-car-change-price").attr("goodID");
		var SGID = $(this).parents(".shopping-cart-li").attr("SGID");
		var SpecialType = $(this).parents(".shopping-cart-li").attr("SpecialType");
//		console.log(SGID);
//		console.log(SpecialType);
		var duihaoColor = $(this).parents(".shopping-cart-li").find(".all-choice-right").css("color");
		if (SpecialType =="0") {
//			alert("2");
			RefreshSaleJia (cartGoodId,SGID);
		} else{
			RefreshCartNumberJia (cartGoodId);
		}
		
		if (duihaoColor=='red') {
			cartTotalPrice ();
		}else{
			return false;
		}
	});
	//cart减号点击数据库+页面特效---
	$(".cart-jianhao").tap(function () {
		var cartGoodId = $(this).parent(".shopping-car-change-price").attr("goodID");
		var cartNumberSpan = $(this).parent(".shopping-car-change-price").find(".cart-number-span").html();
		var duihaoColor = $(this).parents(".shopping-cart-li").find(".all-choice-right").attr("color");
		var SGID = $(this).parents(".shopping-cart-li").attr("SGID");
		var SpecialType = $(this).parents(".shopping-cart-li").attr("SpecialType");
//		var aaa= parseInt($(this).parent().find("span").html());
		if (cartNumberSpan>1) {
			$(this).parent().find("span").html(cartNumberSpan-1);
			if (SpecialType =="0") {
				RefreshSaleJian (cartGoodId,SGID);
			} else{
				RefreshCartNumberJian (cartGoodId);
			}
				cartTotalPrice ();
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
		var cartGoodId = $(this).parent(".car-cell-right-p").find(".shopping-car-change-price").attr("goodID");
		var cartNumberSpan =0;
		var cartCGID = $(this).attr("cartCGID");//加引号
		deleteCartGood (cartCGID);
//		window.location.reload();
		cartTotalPrice();
	});
	//cart点击购买传参，跳转页面	
	$(".cart-to-pay").tap(function () {
//		$(".shopping-cart-li").each(function () {
//				console.log($(this))
//				var cartGoodId = $(this).find(".shopping-car-change-price").attr("goodID");
//				if ($(this).find(".all-choice-right").css("color")=="red") {
////					console.log(userid);
////					console.log(cartGoodId);
//					var goodready = 1;
//					readyToBuy(userid,cartGoodId,goodready);
//				}else{
//					var goodready =0;
//					readyToBuy(userid,cartGoodId,goodready);
//				}
//			})
		//存储总价
		var allPrice = $(".all-choice-price").html();
		localStorage.setItem("allPrice",allPrice);
		//存储购物车ID
		localStorage.setItem("lbyxCartID",data.Result.usercart.CartID);
		
//		console.log(data.Result.usercart.CartID);
		//点击去结算，判断是否选中商品
		if (allPrice==0) {
			alert("请选择商品");
		} else{
			localStorage.setItem("lbyxGiveWay","配送员配送");
			localStorage.setItem("lbyxGiveDay","");
			localStorage.setItem("lbyxDistributionSelectArea","");
			
			window.location.href = "confirm-order-one.html";
		}
//		var allPrice = $(".all-choice-price").html();
//		localStorage.setItem("allPrice",allPrice);
//		window.location.href = "confirm-order-one.html";
	})
	//购物车全选操作
	$(".all-choice-p").tap(function () {
		if($(this).find("i").css("color")=='rgb(204, 204, 204)'){
			$(".shopping-cart-li").each(function () {
				var cartGoodId = $(this).find(".all-choice-right").attr("goodID");//加引号
				var SGID = $(this).attr("SGID");
				var SpecialType = $(this).attr("SpecialType");
//				console.log($(this).attr("GoodsNum"));
			if($(this).attr("GoodsNum")==0){
				return true;//不知道为什么，这个写false，全选的时候就会有的选不中。
			}else{
				if ($(this).attr("GoodsNum")<parseInt($(this).find(".cart-number-span").html())) {
					alert("商品库存不足！");
					return true;
				}else{
					$(this).find(".all-choice-right").css("color","red");
					var goodReady = true;
					if (SpecialType =="0") {//特卖
						SaleReadyToBuy (cartGoodId,goodReady,SGID)
					} else{
						readyToBuy (cartGoodId,goodReady);
					}
				}
			}
			})
			$(this).find("i").css("color","red");
//			$(".all-choice-right").css("color","red");
			cartTotalPrice ();
		}else{
			$(".shopping-cart-li").each(function () {
				var cartGoodId = $(this).find(".all-choice-right").attr("goodID");//加引号
				var SGID = $(this).attr("SGID");
				var SpecialType = $(this).attr("SpecialType");
//				console.log($(this).attr("GoodsNum"));
				//接下来双重判断，商品库存数既不能为零也不能小于选中的商品数量，因为不需要提示不同的信息，所以可以合并为一个判断
				if($(this).attr("GoodsNum")==0||$(this).attr("GoodsNum")<parseInt($(this).find(".cart-number-span").html())){
					return true;
				}else{
					$(this).find(".all-choice-right").css("color","rgb(204, 204, 204)");
					var goodReady = false;
					if (SpecialType =="0") {//特卖
						SaleReadyToBuy (cartGoodId,goodReady,SGID)
					} else{
						readyToBuy (cartGoodId,goodReady);
					}
					cartTotalPrice();
				}
			})
			$(this).find("i").css("color","#ccc");
//			$(".all-choice-right").css("color","#ccc");
			cartTotalPrice ();
		}
	});
	//更新购物车
	function Refreshcart (cartCGID) {
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=updateInvalid&token="+lbyxCode+"&CGID="+cartCGID+"", 
			type:"get",
			dataType:"json",
//			headers: {
////				  'User-Agent': "LBYX 1.0",
//				  'version':"html1.0",
//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//				  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
			success:function(data){
			console.log(data);
			}
		});//ajax
	}//RefreshCartNumber
	//购物车增加商品数量
	function RefreshCartNumberJia (cartGoodId) {
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+cartGoodId+"&Num=1&UniversityId="+universityId+"&Checked=false", 
			type:"get",
			dataType:"json",
//			headers: {
////				  'User-Agent': "LBYX 1.0",
//				  'version':"html1.0",
//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//				  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
			success:function(data){
			//console.log(data)
			}
		});//ajax
	}//RefreshCartNumber
	//特卖购物车增加商品数量
	function RefreshSaleJia (cartGoodId,flashSaleSGID) {
		$.ajax({
			type:"get",
			url:"http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+cartGoodId+"&Num=1&UniversityId="+universityId+"&Checked=false&SGID="+flashSaleSGID+"",
			dataType:"json",
//			headers: {
////				  'User-Agent': "LBYX 1.0",
//				  'version':"html1.0",
//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//				  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
			success:function(data){
				console.log(data);
				//cart加号点击页面特效，数字操作				
					if(data.ResultCode=="23"){
						alert(data.ErrMsg);
						window.location.reload();
					}
			}//success
		});//ajax
	}//RefreshSaleJia
	//购物车减少商品数量
	function RefreshCartNumberJian (cartGoodId) {
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+cartGoodId+"&Num=-1&UniversityId="+universityId+"&Checked=false", 
			type:"get",
			dataType:"json",
//			headers: {
////				  'User-Agent': "LBYX 1.0",
//				  'version':"html1.0",
//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//				  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
			success:function(data){
			//console.log(data)
			}
		});//ajax
	}//RefreshCartNumber
	//购物车减少商品数量
	function RefreshSaleJian (cartGoodId,flashSaleSGID) {
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+cartGoodId+"&Num=-1&UniversityId="+universityId+"&Checked=false&SGID="+flashSaleSGID+"", 
			type:"get",
			dataType:"json",
//			headers: {
////				  'User-Agent': "LBYX 1.0",
//				  'version':"html1.0",
//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//				  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
			success:function(data){
			//console.log(data)
			}
		});//ajax
	}//RefreshCartNumber
	//购物无车删除操作
	function deleteCartGood (cartGoodId) {//cartGoodId  最终指的是reportID，代表商品的ID
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCart.aspx?Token="+lbyxCode+"&action=ShoppingCart_get&cgid="+cartGoodId+"&operation=99&Checked=false&", 
			type:"get",
			dataType:"json",
//			headers: {
////				  'User-Agent': "LBYX 1.0",
//				  'version':"html1.0",
//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//				  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
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
//			headers: {
////				  'User-Agent': "LBYX 1.0",
//				  'version':"html1.0",
//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//				  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
			success:function(data){
//				console.log(data);
//				if(data.ResultCode==23){
//					alert("库存不足");
//				}
			}
		});//ajax
	}//readyToBuy
	//cart对号操作时checked值改变
	function SaleReadyToBuy (cartGoodId,goodready,flashSaleSGID) {
		$.ajax({
			url: "http://api.x5u.com.cn:12804/ShoppingCart/ShoppingCartNew.aspx?action=ShoppingCart_add&token="+lbyxCode+"&RepertoryId="+cartGoodId+"&Num=0&UniversityId="+universityId+"&Checked="+goodready+"&SGID="+flashSaleSGID+"",  //注册地址
			type:"get",
			dataType:"json",
//			headers: {
////				  'User-Agent': "LBYX 1.0",
//				  'version':"html1.0",
//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//				  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
			success:function(data){
//				console.log(data);
				//alert("2");
			}
		});//ajax
	}//readyToBuy
	//cart将选中对号的商品总价计算出来，封装成方法
	cartTotalPrice();
	function cartTotalPrice (){
		var cartAllPrice = 0;
//		console.log($(".shopping-cart-li").length);
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
			//判断运费的思路
//			if($(".all-choice-price").html()<28){
//				console.log($(".all-choice-price").html())
//				$(".cart-freight").show();
//			}
			$(".all-choice-price").html(cartAllPrice.toFixed(2));
	}//cartTotalPrice
			}//success
		});//ajax
//	}//cartShows
});