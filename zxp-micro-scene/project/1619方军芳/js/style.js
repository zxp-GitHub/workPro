//touchstart ---------mousedown  ------开始触摸
//touchmove -----------mousemove  ----------移动
//touchend	-----------mouseup  ----------结束触摸
var num = 0;
	startX = 0;
	startY = 0;
	endX = 0;
	endY = 0;
	len = $(".page_slide").length;
$("#page_box").on("touchstart",".page_slide",function(e){
	//console.log(e);
	startX = e.touches[0].clientX;
	startY = e.touches[0].clientY;
}).on("touchmove",".page_slide",function(e){
	endX = e.touches[0].clientX;
	endY = e.touches[0].clientY;
}).on("touchend",".page_slide",function(){
	var moveX = endX - startX;
	var moveY = endY - startY;
	
	if(Math.abs(moveY)>120 && endY != 0){
		console.log(moveY);
		if(moveY>0){
			console.log("下");
			num--;
			if(num<0){
				num = 0;
				return;
			}
			$(this).addClass("tobottom").removeClass("show").prev(".page_slide").removeClass("hide").addClass("prevTobottom");
			$(this).on("webkitAnimationEnd",function(){
				$(this).removeClass("tobottom").addClass("hide").prev(".page_slide").removeClass("prevTobottom").addClass("show");
				$(this).off("webkitAnimationEnd");
			})
		}else if(moveY<0){
			console.log("上");
			num++;
			if(num > len-1){
				num = len-1;
				return;
			}
			$(this).addClass("toTop").removeClass("show").next(".page_slide").removeClass("hide").addClass("nextToTop");
			$(this).on("webkitAnimationEnd",function(){
				$(this).removeClass("toTop").addClass("hide").next(".page_slide").removeClass("nextToTop").addClass("show");
				$(this).off("webkitAnimationEnd");
			})
		}
		endY = 0;
	}
})
