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
			console.log(data);
					if(data.result.status.msg=="succ"||data.result.status.msg=="flunk"){
					alert("登录成功");
	//				localStorage.setItem("userID",data[0].userID);
					localStorage.setItem("indexPage",0);
//					window.location.href = "index.html";
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
/*S all-goods*/
$.ajax({
			type:"get",
			url:"http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=GoodsTypeInfo_get&operation=0&kind=0&",
			dataType:"json",
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
			url:"http://api.x5u.com.cn:12804/School/CommonInterface.aspx?action=GoodsTypeInfo_get&operation=1&parentid="+goodNum+"&kind=0&jsoncallback=&universityid=4CE1F934-21A8-4B35-AFB7-74D426740A9E&",
			dataType:"json",
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
/*E all-goods*/
});//zepto
