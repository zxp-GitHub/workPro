Zepto(function(){
	var index=1;
    //上翻页功能
    $('.container').swipeUp(function(){
        index++;
        // console.log(index)
        // console.log($('.mainUl').css("top"))
        if (index==11) {
            $('.mainUl').css({top:"0"});
            index=1;
        }
        $('.mainUl').animate({"top":-100*index+"%"},{duration: 200,complete:show});
    })
    //下翻页功能
    $('.container').swipeDown(function(){
        index--;
        if (index==-1) {
            $('.mainUl').css({top:"-1000%"});
            index=9;
        }
        $('.mainUl').animate({"top":-100*index+"%"},{duration: 200,complete:show});
    })
	//alert(parseInt(Math.random()*26))
	//S音乐播放与暂停功能
	    var mOver=true;
	    var oMus=$(".mus")[0];//这个[0]是必须加的
	    var oMusic=$(".music")[0];
	    $('.music').tap(function () {
	    	console.log(mOver)
	        if (mOver){
	        	//注释部分是停止后留在原位，去class的是回归旋转角度为0.
	        	// oMusic.style.animationPlayState="paused"
	            $('.music').removeClass("music-rotate");
	            oMus.pause();
	            mOver=false;
	        }else {
	            // oMusic.style.animationPlayState="running"
	            $('.music').addClass("music-rotate");
	            // rotate.className("music");
	            oMus.play();
	            mOver=true;
	        }
	    })
	//E音乐播放与暂停功能
	//每次换页播放动画
    var page1=$('.page1');
    var page2=$('.page2');
    var page3=$('.page3');
    var page4=$('.page4');
    var page5=$('.page5');
    var page6=$('.page6');
    var page7=$('.page7');
    var page8=$('.page8');
    var page9=$('.page9');
    var page10=$('.page10');
    var page11 = $(".page11");
    // var page11=$('.page11');

    // //获取每页div的内容
    var str1=page1.html();
    var str2=page2.html();
    var str3=page3.html();
    var str4=page4.html();
    var str5=page5.html();
    var str6=page6.html();
    var str7=page7.html();
    var str8=page8.html();
    var str9=page9.html();
    var str10=page10.html();

    // //初始化一下
    page2.html("");
    page3.html("");
    page4.html("");
    page5.html("");
    page6.html("");
    page7.html("");
    page8.html("");
    page9.html("");
    page10.html("");
    // page11.html("");
    function show() {
        var iT=$('.mainUl').css("top");
        console.log(iT);
        // if (iT=="0%"){
        //     page1.html(str1)
        // }else {
        //     page1.html("")
        // }
        if (iT=="-100%"){
            page1.html(str1);
        }else {
            page1.html("")
        }

        if (iT=="-200%"){
            page2.html(str2)
        }else {
            page2.html("")
        }

        if (iT=="-300%"){
            page3.html(str3)
        }else {
            page3.html("")
        }

        if (iT=="-400%"){
            page4.html(str4)
        }else {
            page4.html("")
        }

        if (iT=="-500%"){
            page5.html(str5)
        }else {
            page5.html("")
        }

        if (iT=="-600%"){
            page6.html(str6)
        }else {
            page6.html("")
        }

        if (iT=="-700%"){
            page7.html(str7)
        }else {
            page7.html("")
        }

        if (iT=="-800%"){
            page8.html(str8)
        }else {
            page8.html("")
        }
        if (iT=="-900%"){
            page9.html(str9)
        }else {
            page9.html("")
        }
        if (iT=="-1000%"){//缺少了负号页面显示为空，有背景图片
        	// console.log(page10.html(""));
            page10.html(str10)
        }else {
            page10.html("")
        }
        if (iT=="0%"){
            page11.html(str10)
        }else {
            page11.html("")
        }
    }
});
