Zepto(function() {
	var goodsId = window.location.search.split("=")[2];
	var userID = window.location.search.split("=")[1];
	var userIDs = userID.split("&")[0];
	console.log(userIDs)
//	console.log(usernames);
	$.ajax({
			type:"get",
			url:"php/product-detail.php",
			dataType:"json",
			data:{
				goodID:goodsId
			},
			success:function(data){
				//商品图片的渲染
				console.log(data);
				$(".swiper-wrapper").find("img").attr("src",data[0].goodsrc);
				$(".pro-detail-two-goods-info").html(data[0].goodname);
				$(".product-detail-price").html(data[0].goodprice);
			}//success
		});//ajax
		$(".let-go-to-cart").tap(function () {
			window.location.href = "index.html?userID="+userIDs;
		});
		//加入购物车操作
		$(".add-to-car").tap(function(){
			var goodsnums = parseInt($(".pro-detail-three-num").html());
			$.ajax({
			type:"get",
			url:"php/cart.php",
			dataType:"json",
			data:{
				goodID:goodsId,
				userID:userIDs,
				goodnum:goodsnums
			},
			success:function(data){
				//商品图片的渲染
			}//success
		});//ajax
		});
});