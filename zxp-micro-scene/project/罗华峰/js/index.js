Zepto(function ($) {
    //音乐播放
    var music = document.getElementById("music");
    var myMusic = document.getElementById("mymusic");
    var key = true;
    music.onclick = function () {
        if(key){
            myMusic.pause();
            key = false;
   	$(".music2").removeClass("musicRotate");
        }else {
            myMusic.play();
            key = true;
            $(".music2").addClass("musicRotate");
        }
    };
    var i = 0;
    xianshi(0);
    $(".box").swipeUp(function () {
        i++;
        if(i == 7){
            $(".ul").css({"top":"0"});
            i = 1;
        }
        $(".ul").animate({"top":-i*100+"%"});
        xianshi(i);
    });
    $(".box").swipeDown(function () {
        i--;
        if(i == -1){
            $(".ul").css({"top":"-600%"});
            i = 5;
        }
        $(".ul").animate({"top":-i*100+"%"});
        xianshi(i);
    });

    function xianshi(i) {
        if(i == 0){
            $(".page1").html("");
            $img = $('<img src="images/page1-2.png" class="page1-2"> ' +
                '<img src="images/page1-3.png" class="page1-3">');
            $(".page1").append($img);

        }
        if(i == 1){
            $(".page2").html("");
            $img = $('<img src="images/page2-1.png" class="page2-1"> ' +
                '<img src="images/page2-2.png" class="page2-2">');
            $(".page2").append($img);

        }
        if(i == 2){
            $(".page3").html("");
            $img = $('<img src="images/page3-1.png" class="page3-1"> ' +
                '<img src="images/page3-2.png" class="page3-2">')
            $(".page3").append($img);
        }
        if(i == 3){
            $(".page4").html("");
            $img = $('<img src="images/page4-1.png" class="page4-1"> ' +
                '<img src="images/page4-2.png" class="page4-2">')
            $(".page4").append($img);
        }
        if(i == 4){
            $(".page5").html("");
            $img = $('<img src="images/page5-1.png" class="page5-1"> ' +
                '<img src="images/page5-2.png" class="page5-2">')
            $(".page5").append($img);
        }
        if(i == 5){
            $(".page6").html("");
            $img = $('<img src="images/page6-1.png" class="page6-1"> ' +
                '<img src="images/page6-2.png" class="page6-2"> ' +
                '<img src="images/page6-3.png" class="page6-3"> ' +
                '<img src="images/page6-4.png" class="page6-4">');
            $(".page6").append($img);
        }
        if(i == 6){
            $(".page1").html("");
            $img = $('<img src="images/page1-2.png" class="page1-2"> ' +
                '<img src="images/page1-3.png" class="page1-3">');
            $(".page1").append($img);
        }
    }
});