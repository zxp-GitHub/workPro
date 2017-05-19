Zepto(function() {
/*S register*/
	$(".register-confirm-registration").tap(function () {
		 var usernam = $(".register-name").val();
    	 var userpas = $(".register-pass").val();
		console.log(usernam);
//		window.location.href = "http://localhost/bysj/php/register.php?username="+usernam+"&password="+userpas;
		$.ajax({
		url: "php/register.php",  //注册地址
		type:"get",
		data:{
			username:usernam,
			password:userpas
		},
		success:function(data){
			//alert(data);
			
	}
	});//ajax
	});
/*E register*/

/*S login*/
//function dosomething (data) {
//	console.log(data)
//}

    $(".confirm-login").tap(function(){
//  	alert(jstext);
//  	alert(data);
		var Name = $(".login-name").val();
	 	var Pass =$(".login-pass").val();
//	 	console.log(Name)
//	 	window.location.href = "http://localhost/bysj/php/log.php?username="+Name+"&password="+Pass;
//	 	$.get({ url: "http://localhost/bysj/php/log.php", 
//	 	success: function(data){
//	 		console.log(data)
//    }}); // data为返回的数据
//      $.getJSON('http://localhost/bysj/php/log.php?callback=?',function (jsondata) {
//      	console.log(data);
//      });
		$.ajax({
		url: "php/log.php",  //注册地址
		type:"get",
		data:{
			username:Name,
			password:Pass
		},
		//data 传递的参数以一个对象形式
		success:function(data){
				//window.location.href = "first.html";
				console.log(data)
				}
			})
		})
/*E login*/
});