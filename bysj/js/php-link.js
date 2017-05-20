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
	console.log($(this).index());
	var goodNum = $(this).index();
	$.ajax({
		type:"get",
		url:"php/all-goods.php",
		data:{
			goodnum:goodNum,
		},
		success:function(data){
			console.log("水果是："+data);	
//			for (var i = 0; i < data.length; i++) {
//				console.log(data[i]);
//				
//			}
				}
	});//ajax
})//tap
/*E all-goods*/
});