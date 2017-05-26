Zepto(function() {
/*S register*/
	$(".register-confirm-registration").tap(function () {
		 var usernam = $(".register-name").val();
    	 var userpas = $(".register-pass").val();
		$.ajax({
		url: "php/register.php",  //注册地址
		type:"get",
		data:{
			username:usernam,
			password:userpas
		},
		success:function(data){
			console.log(data);
			if(data==1){
				alert("用户已存在！");
			}
			if(data==0){
				alert("注册成功了，亲~！");
			}
	}
	});//ajax
	});
/*E register*/

/*S login*/
    $(".confirm-login").tap(function(){
		var Name = $(".login-name").val();
	 	var Pass =$(".login-pass").val();
		$.ajax({
		url: "php/log.php",  //注册地址
		type:"get",
		dataType:"json",
		data:{
			username:Name,
			password:Pass
		},
		//data 传递的参数以一个对象形式
		success:function(data){
				if(data!=0){
				alert("登录成功");
//				$(".log-mask").show()
//				$(".log-mask").html("登录成功");
				window.location.href = "all-goods.html?userID="+data[0].userID;
//				localStorage.setItem("userID",Name);
			}
				if(data==0){
				alert("信息填写错误");
			}
				}
			})
		});
/*E login*/

/*S all-goods*/
//点击左侧列表可以切换右侧图片，给初值也可以，！！！放在ajax里面，在ajax外面是无法调用的。
	function newAllGood(goodNums){
		$.ajax({
			type:"get",
			url:"php/all-goods.php",
			dataType:"json",
			data:{
				goodnum:goodNums
			},
			success:function(data){
				//商品图片的渲染
				function addProduct(obj) { //通过不断地加载，但是点击之后ul又会清空来实现分页的效果
					var html = "<li class=\"all-goods-min-li\" data-id=\""+obj.goodID+"\"><img src=\" " + obj.goodsrc+"\"/>";
						html += "<p>" + obj.goodname + "</p><p>¥<span>"+obj.goodprice+"</span></p></li>";
						$(".all-goods-min-ul").append(html);
			    };//addProduct
			    
				//所有商品dom显示。
				for(var i = 0; i < data.length; i++) {
					addProduct(data[i]);
				}
				//!!!!!!对于ajax渲染的元素进行操作时，必须放在ajax里面。
				//点击商品列表的图片，然后获得这个商品的ID，然后放到地址栏里。
				$(".all-goods-min-li").tap(function () {
					var goodID = $(this).attr("data-id");
					window.location.href = "product-details.html"+window.location.search+"&goodID="+goodID;		
				});
			}//success
		});//ajax
		};//newAllGood
	   newAllGood(0);
	$(".all-goods-left-ul li").tap(function () {
	$(".all-goods-min-ul").html("");
	var goodNum = $(this).index();
	newAllGood(goodNum);
});//tap
/*E all-goods*/

/*S product-detail*/
	
/*E product-detail*/
});