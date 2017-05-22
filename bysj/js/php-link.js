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
		data:{
			username:Name,
			password:Pass
		},
		//data 传递的参数以一个对象形式
		success:function(data){
				if(data==1){
//				alert("登录成功");
				window.location.href = "all-goods.html?username="+Name;
			}
				if(data==0){
				alert("信息填写错误");
			}
				}
			})
		})
/*E login*/
/*S all-goods*/
$(".all-goods-left-ul li").tap(function () {
	$(".all-goods-min-ul").html("");
	console.log($(this).index());
	var goodNum = $(this).index();
	$.ajax({
		type:"get",
		url:"php/all-goods.php",
		dataType:"json",
		data:{
			goodnum:goodNum,
		},
		success:function(data){
			function addProduct(obj) { //通过不断地加载，但是点击之后ul又会清空来实现分页的效果
			var html = "<li class=\"all-goods-min-li\"><a href=\"product-details.html\"><img src=\" " + obj.goodsrc+"\"/>";
				html += "<p>" + obj.goodname + "</p><p>¥<span>23</span></p></a></li>";
			$(".all-goods-min-ul").append(html);
		    };//addProduct
		    
			//所有商品dom显示。
			for(var i = 0; i < data.length; i++) {
			addProduct(data[i]);
			}
			
			
			$(".all-goods-min-li").tap(function () {
				
				
			});
		}
	});//ajax
})//tap
/*E all-goods*/
});