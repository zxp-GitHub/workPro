Zepto(function() {
	/*S register*/
	$(".register-confirm-registration").tap(function () {
		 var usernam = $(".register-name").val();
    	 var userpas = $(".register-pass").val();
    	 var userpas2 = $(".register-pass2").val();
    	if(userpas!=userpas2){
			alert("密码填写不匹配");
		}else{
			$.ajax({
			url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=MessageAuthentication_get&operation=8&mobile="+usernam+"&password="+userpas+"&qupassword="+userpas2+"&devicenumber=1&universityid=f2bf5332-d85e-432a-bc4a-ac7f34fb7268&universityname=北京航空航天&InvitedYards=1&",  //注册地址
			type:"get",
			success:function(data){
				console.log(data.result.status.msg);
				if(data.result.status.msg=="succ"){
					alert("注册成功了，亲~！");
				}else{
					alert("用户已存在！");
				}
			}
			});//ajax		
		}//else
	});
/*E register*/
/*S login*/
    $(".confirm-login").tap(function(){
		var loginName = $(".login-name").val();
	 	var loginPass =$(".login-pass").val();
		$.ajax({
		url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=Login_set&operation=0&UserName="+loginName+"&Password="+loginPass+"&",  //注册地址
		type:"get",
		dataType:"json",
		success:function(data){
			console.log(data)
					if(data.result.status.msg=="succ"||data.result.status.msg=="flunk"){
					alert("登录成功");
	//				localStorage.setItem("userID",data[0].userID);
					window.location.href = "index.html";
					localStorage.setItem("indexPage",0);
					}
					if(data.result.status.msg!="succ"&&data.result.status.msg!="flunk"){
					alert("信息填写错误");
					}
				}
		});//ajax
	});
/*E login*/
/*S forget-password*/
	$(".get-dynamic-code").tap(function(){
		var forgetName = $(".forget-phone").val();
	 	var forgetPass =$(".forget-code").val();
		$.ajax({
		url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=MessageAuthentication_get&operation=9&mobile="+forgetName+"&password=12345&",  //注册地址
		type:"get",
		dataType:"json",
		success:function(data){
				console.log(data);
			}
		});//ajax
		});
/*E forget-password*/







});//zepto
