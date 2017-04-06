 $(function  () {
 $('.footer-ul li').on('tap',function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.big-ul>li').hide().eq($(this).index()).show();
        //$('.big-ul li')会报错，是指所有的li
    })
 });
 