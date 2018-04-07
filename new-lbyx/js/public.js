	function getNowFormatDate(){
	    var day = new Date();
	    var Year = 0;
	    var Month = 0;
	    var Day = 0;
	    var Hours = 0;
	    var Min = 0;
	    var Sec = 0;
	    var CurrentDate = "";
	    Year= day.getFullYear();//支持IE和火狐浏览器.
	    Month= day.getMonth()+1;
	    Day = day.getDate();
	    Hours = day.getHours();
	    Min = day.getMinutes();
	    Sec = day.getSeconds();
	    CurrentDate += Year;
	    if (Min >= 10 ){
	     CurrentDate += Min ;
	    }
	    else{
	     CurrentDate += "0" + Min ;
	    }
	    if (Day >= 10 ){
	     CurrentDate += Day ;
	    }
	    else{
	     CurrentDate += "0" + Day ;
	    }
	    if (Hours >= 10 ){
	     CurrentDate += Hours ;
	    }
	    else{
	     CurrentDate += "0" + Hours ;
	    }
	    if (Month >= 10 ){
	     CurrentDate += Month;
	    }
	    else{
	     CurrentDate += "0" + Month;
	    }
	    if (Sec >= 10 ){
	     CurrentDate += Sec ;
	    }
	    else{
	     CurrentDate += "0" + Sec ;
	    }
	    return CurrentDate;
	 }
//	 Zepto(function () {
//		//点击返回
//		$(".top-back-li").tap(function () {
//			window.history.back();
//		});
//	});
	 