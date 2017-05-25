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
					html += "						<span class=\"shopping-car-change-price\">";
					html += "							<i class=\"iconfont icon-jianhao1\" style=\"float: left;color: red\"></i>";
					html += "							<span style=\"padding: 0rem 0.3rem 0.2rem; \">"+obj.goodnumber+"</span>";
					html += "							<i class=\"iconfont icon-jiahao2\" style=\"color: red\"></i>";
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
						
/*S 加减号点击，数字操作*/				
	$(".shopping-car-change-price>.icon-jiahao2").tap(function(){
	var aaa= parseInt($(this).parent().find("span").html());
	$(this).parent().find("span").html(aaa+1);
	if (aaa==0) {
		console.log($(this).css("color"));
		$(this).parent().find(".icon-jianhao1").css("color","#FF0000");
	}
});
	$(".shopping-car-change-price>.icon-jianhao1").tap(function(){
		var aaa= parseInt($(this).parent().find("span").html());
		if (aaa>0) {
			$(this).parent().find("span").html(aaa-1);
		} else{
			return false;
		};
		if (aaa==1) {
				$(this).css("color","#ccc");
		}
	});
/*E 加减号点击，数字操作*/	
$(".cart-all-choice").tap(function () {
	$(".shopping-cart-li-cell").find(".icon-duihao1").css("color","red");
});
$(".all-choice-right").tap(function () {
	if ($(this).color=="#ccc") {
		$(this).css("color","red")
	} else{
		$(this).css("color","#ccc")
	}
	
})
			}//success
		});//ajax
		}//cartShow
		
});