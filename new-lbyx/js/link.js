Zepto(function() {
//	function getNowFormatDate(){
//	    var day = new Date();
//	    var Year = 0;
//	    var Month = 0;
//	    var Day = 0;
//	    var Hours = 0;
//	    var Min = 0;
//	    var Sec = 0;
//	    var CurrentDate = "";
//	    Year= day.getFullYear();//支持IE和火狐浏览器.
//	    Month= day.getMonth()+1;
//	    Day = day.getDate();
//	    Hours = day.getHours();
//	    Min = day.getMinutes();
//	    Sec = day.getSeconds();
//	    CurrentDate += Year;
//	    if (Min >= 10 ){
//	     CurrentDate += Min ;
//	    }
//	    else{
//	     CurrentDate += "0" + Min ;
//	    }
//	    if (Day >= 10 ){
//	     CurrentDate += Day ;
//	    }
//	    else{
//	     CurrentDate += "0" + Day ;
//	    }
//	    if (Hours >= 10 ){
//	     CurrentDate += Hours ;
//	    }
//	    else{
//	     CurrentDate += "0" + Hours ;
//	    }
//	    if (Month >= 10 ){
//	     CurrentDate += Month;
//	    }
//	    else{
//	     CurrentDate += "0" + Month;
//	    }
//	    if (Sec >= 10 ){
//	     CurrentDate += Sec ;
//	    }
//	    else{
//	     CurrentDate += "0" + Sec ;
//	    }
//	    return CurrentDate;
//	 }
	var universityId = localStorage.getItem("universityId");
	//alert($.md5(getNowFormatDate()))
	/*S register*/
		//点击获取验证码--1.号码不可为空2.判断用户是否已存在
		$(".register-validation-code").tap(function () {
			var usernam = $(".register-phone-input").val();
			console.log(usernam)
			if (usernam=="") {//判定为空，中间不可再加空格
				alert("手机号码不可为空！");
			}else{
				var mobileReg = /^[1]{1}[3|5|7|8]{1}\d{9}$/;
				var mobileStr = $('.register-phone-input').val();
				var result = mobileReg.test(mobileStr);
				//console.log(result)
				if(result == false) {
					alert("请输入正确手机号！");
				}else{
//					 $.ajax({
//		                type: "post",
//		                url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx",
////		                data: { action: "Login_set", operation: "0", UserName: "18753377218", Password: "qq359784" },
//		                headers: {
//		                    "User-Agent": "LBYX 1.0"
//		                    , "version": "test"
//		                    , 'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//					  		  'HTTP_LBYX_TIME':getNowFormatDate(),
//		                }, success: function (result) {
//			                    alert("token:" + result.result.status.code);
//			                }
//		                  });
//					console.log(usernam)
					$.ajax({
					url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=MessageAuthentication_get&operation=3&mobile="+usernam+"&type=0&XWYorKP=1&",
					type:"get",
//					headers: {
//					  'User-Agent': "LBYX 1.0",
////					  'version':"html1.0",
//					  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//					  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
					success:function(data){
						console.log(data);
						if(data.result.status.msg=="fail"){//判断是否获取失败
							alert("获取失败");
						}else{
							if(data.result.status.msg=="此用户已存在"){//判断用户是否存在
								alert("此用户已存在");
							}else{
								if(data.result.status.msg=="succ"){//获取验证码成功
									alert("短信已发送注意查收");
								}
							}
						}
						
					},error:function(data){
							alert("no");
						}
					});//ajax	
				}
			}
		});
		//点击下一步，然后通过电话号码和验证码判断用户是否存在--1.内容不为空2.若验证码正确，提示注册成功
		$(".register-next-step").tap(function () {
//			window.location.href = "register-set-password.html";
			var registerPhone = $(".register-phone-input").val();
			var registerCode = $(".register-code-input").val();
			if(registerPhone==""||registerCode==""){
				alert("亲，内容不可为空！");
			}
			localStorage.setItem("registerPhone",registerPhone);
			$.ajax({
				url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=MessageAuthentication_get&operation=7&vcode="+registerCode+"&mobile="+registerPhone+"&",
				type:"get",
//				headers: {
////					  'User-Agent': "LBYX 1.0",
//					  'version':"html1.0",
//					  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//					  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
				success:function(data){
					console.log(data.result.status.msg);
					if(data.result.status.msg=="succ"){
						alert("注册成功了，亲~！");
						window.location.href = "register-set-password.html";
					}
				}
				});//ajax	
		});
		//注册设置密码时，点击下一步的效果。
		$(".register-pass-next-step").tap(function () {
			var registerPhone = localStorage.getItem("registerPhone");
			console.log(registerPhone);
			var registerpass1 = $(".register-set-pass1").val();
	  		var registerpass2 = $(".register-set-pass2").val();
	  		console.log(registerpass1,registerpass2)
		  	if (registerpass1!=registerpass2) {
		  		alert("密码不匹配！")
		  		return true;
		  	} else{
		  		$.ajax({
					url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=MessageAuthentication_get&operation=8&mobile="+registerPhone+"&password="+registerpass1+"&qupassword="+registerpass2+"&",
					type:"get",
//					headers: {
//					  'User-Agent': "LBYX 1.0",
//					  'version':"html1.0",
//					  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//					  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
					success:function(data){
						console.log(data);
		//				if(data.result.status.msg=="succ"){
		//					alert("注册成功了，亲~！");
		//				}else{
		//					alert("用户已存在！");
		//				}
					}
					});//ajax	
		  	}
		});
	/*E register*/
	/*S login*/
	    $(".confirm-login").tap(function(){
			var loginName = $(".login-name").val();
		 	var loginPass =$(".login-pass").val();
		 	console.log(loginName);
		 	console.log(loginPass);
			$.ajax({
			url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=Login_set&operation=0&UserName="+loginName+"&Password="+loginPass+"&",  //注册地址
			type:"get",
			dataType:"json",
	//		headers: {
	////				  'User-Agent': "LBYX 1.0",
	//				  'version':"html1.0",
	//				  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
	//				  'HTTP_LBYX_TIME':getNowFormatDate(),
	//				   },
			success:function(data){
				console.log(data);
	//					if(data.result.status.msg!="succ"){
	//						alert("信息填写错误");
	//					}
						if(data.result.status.msg=="succ"){
							alert("登录成功");
			//				localStorage.setItem("userID",data[0].userID);
							localStorage.setItem("userId",data.result.data.UserId);
							localStorage.setItem("lbyxCode",data.result.status.code);
							localStorage.setItem("indexPage",0);
							localStorage.setItem("Nickname",data.result.data.Nickname);
							window.location.href = "index.html";
						}else{
							alert("信息填写错误");
						}
					}
			});//ajax
		});
	/*E login*/
	/*S forget-password*/
		//点击获取验证码--1.号码不可为空2.判断用户是否已存在
		$(".get-dynamic-code").tap(function () {
			var usernam = $(".forget-pass-input").val();
			if (usernam=="") {//判定为空，中间不可再加空格
				alert("手机号码不可为空！");
			}else{
				var mobileReg = /^[1]{1}[3|5|7|8]{1}\d{9}$/;
				var mobileStr = $('.forget-pass-input').val();
				var result = mobileReg.test(mobileStr);
				console.log(mobileStr)
				if(result == false) {
					alert("请输入正确手机号！");
				}else{
					$.ajax({
					url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=MessageAuthentication_get&operation=3&mobile="+mobileStr+"&type=1&XWYorKP=0&",
					type:"get",
					headers: {
					  'User-Agent': "LBYX 1.0",
//					  'version':"html1.0",
					  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
					  'HTTP_LBYX_TIME':getNowFormatDate(),
				   },
					success:function(data){
						console.log(data);
//						alert("短信已发送注意查收");
						if(data.result.status.msg=="fail"){
							alert("获取失败");
						}
						if(data.result.status.succ=="fail"){
							alert("短信已发送注意查收");
						}
//						if(data.result.status.msg=="此用户已存在"){
//							alert(data.result.status.msg);
//						}
					},
					error:function(){
						alert('no');
					}
					});//ajax
				}
			}
		});
		//点击下一步，然后通过电话号码和验证码判断用户是否存在--1.内容不为空2.若验证码正确，提示注册成功
		$(".forget-pass-next-step").tap(function () {
//			window.location.href = "register-set-password.html";
			var forgetPhone = $(".forget-pass-input").val();
			var forgetCode = $(".forget-pass-input2").val();
				 	console.log(forgetPhone,forgetCode)
			if(forgetPhone==""||forgetCode==""){
				alert("亲，内容不可为空！");
			}
//			localStorage.setItem("registerPhone",registerPhone);
			$.ajax({
				url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=MessageAuthentication_get&operation=7&vcode="+forgetCode+"&mobile="+forgetPhone+"&password=12345&",
				type:"get",
//				headers: {
////					  'User-Agent': "LBYX 1.0",
//					  'version':"html1.0",
//					  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
//					  'HTTP_LBYX_TIME':getNowFormatDate(),
//				   },
				success:function(data){
					console.log(data);
					localStorage.setItem("lbyxForgetPhone",forgetPhone)
					window.location.href = "set-new-password.html";
//					if(data.result.status.msg=="succ"){
//						alert("注册成功了，亲~！");
//					}
				}
				});//ajax	
		});
	/*E forget-password*/
	/*S all-goods*/
		$.ajax({
				type:"get",
				url:"http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=GoodsTypeInfo_get&operation=0&kind=0&",
				dataType:"json",
	//			headers: {
	////					  'User-Agent': "LBYX 1.0",
	//					  'version':"html1.0",
	//					  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
	//					  'HTTP_LBYX_TIME':getNowFormatDate(),
	//				   },
				success:function(data){
	//				console.log(data.result.data);
	//				//商品图片的渲染
					function allGoodLeft(obj) { //通过不断地加载，但是点击之后ul又会清空来实现分页的效果
						var html = "<li attrs="+obj.value+"><span>"+obj.text+"</span></li>";
							$(".all-goods-left-ul").append(html);
				    };//addProduct
					for (var i = 0; i < data.result.data.length; i++) {
						allGoodLeft(data.result.data[i]);
					}
					//点击切换左侧按钮，颜色的转变和右侧相应商品的转换
					$(".all-goods-left-ul>li").tap(function  () {
						$(this).css({"background-color":" #fff","color":"red"}).siblings().css({"background-color":"rgb(240,240,240)","color":"#000"})
					});
					$('.all-goods-left-ul>li').tap(function(){
				        $(this).addClass('active').siblings().removeClass('active');
				        $(".all-goods-list-ul").html("");
				        var goodNums = $(this).attr("attrs");
				        console.log(goodNums);
				        allGoodRight(goodNums);
	//			        $('.all-goods-list-ul>li').hide().eq($(this).index()).show();
				   });
				}//success
			});//ajax	
		//点击左侧列表可以切换右侧图片，给初值也可以，！！！放在ajax里面，在ajax外面是无法调用的。
		function allGoodRight(goodNum){
			$.ajax({
				type:"get",
				url:"http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=GoodsTypeInfo_get&operation=1&parentid="+goodNum+"&kind=0&jsoncallback=&universityid="+universityId+"&",
				dataType:"json",
	//			headers: {
	////					  'User-Agent': "LBYX 1.0",
	//					  'version':"html1.0",
	//					  'HTTP_LBYX_SID':"ocP2XkIj3sb6MKF4D6Lpcs9QLqRMK8dbo29vvtIFVjGpYygQ3U"+$.md5(getNowFormatDate()),
	//					  'HTTP_LBYX_TIME':getNowFormatDate(),
	//				   },
				success:function(data){
					console.log(data.result.data);
	//				//商品图片的渲染
					function addProduct(obj) { //通过不断地加载，但是点击之后ul又会清空来实现分页的效果
						var html = "<li class=\"all-goods-list-li\">";
							html += "			<div class=\"right-min-box\">";
							html += "			<p class=\"right-min-box-p\">"+obj.text+"</p>";
							html += "			<div class=\"all-goods-right-cell\">";
							html += "				<ul class=\"right-cell-ul\">";
							for (var i = 0; i < obj.goodstypes.length; i++) {
									allGoodsLi (obj.goodstypes[i]);
								}
							html += "				</ul>";
							html += "			</div>";
							html += "		</div>";
							html += "			</li>";
							function allGoodsLi (objs) {
								html += "<li class=\"right-cell-li\" allGoodsPicID = \""+objs.value+"\"><img class=\"all-goods-pic\" src=\"http://api.x5u.com.cn:12804"+objs.GoodsTypeImg+"\"/><p class=\"all-good-cell-p\">"+objs.text+"</p></li>";
							}
							$(".all-goods-list-ul").append(html);
				    };//addProduct
					for (var i = 0; i < data.result.data.length; i++) {
						addProduct(data.result.data[i]);
					}
					$(".right-cell-li").tap(function () {
						var allGoodsPicID = $(this).attr("allGoodsPicID");
						console.log(allGoodsPicID);
						localStorage.setItem("allGoodsPicID",allGoodsPicID);
						window.location.href = "select-area-three.html";
					})
				}//success
			});//ajax
			};//addProduct
		allGoodRight(208);
		//});//tap
		$(".all-goods-search-input").focus(function () {
		window.location.href = "search-page.html";
		});
	/*E all-goods*/
	$(".top-back-li").tap(function () {
		window.history.back();
	});
});//zepto



//	$(".register-confirm-registration").tap(function () {
	//		 var usernam = $(".register-name").val();
	//  	 var userpas = $(".register-pass").val();
	//  	 var userpas2 = $(".register-pass2").val();
	//  	if(userpas!=userpas2){
	//			alert("密码填写不匹配");
	//		}else{
	//			$.ajax({
	//			url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=MessageAuthentication_get&operation=8&mobile="+usernam+"&password="+userpas+"&qupassword="+userpas2+"&devicenumber=1&universityid=f2bf5332-d85e-432a-bc4a-ac7f34fb7268&universityname=北京航空航天&InvitedYards=1&",  //注册地址
	//			type:"get",
	//			success:function(data){
	//				console.log(data.result.status.msg);
	//				if(data.result.status.msg=="succ"){
	//					alert("注册成功了，亲~！");
	//				}else{
	//					alert("用户已存在！");
	//				}
	//			}
	//			});//ajax		
	//		}//else
	//	});
	
	
	
	/*S forget-password*/
//	$(".get-dynamic-code").tap(function(){
//		var forgetName = $(".forget-phone").val();
//	 	var forgetPass =$(".forget-code").val();
//		$.ajax({
//		url: "http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=MessageAuthentication_get&operation=9&mobile="+forgetName+"&password=12345&",  //注册地址
//		type:"get",
//		dataType:"json",
//		success:function(data){
//				console.log(data);
//			}
//		});//ajax
//		});
	/*E forget-password*/