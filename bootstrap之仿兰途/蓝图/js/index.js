/**
 * Created by Administrator on 2017/3/7.
 */

(function(){
    var $tab = $('.banner .b-tab ul li'),
        $part = $('.banner .b-part .part'),
        $banner = $('.banner'),
        length = $tab.length,
        timer = null,
        index = 0;
    $tab.eq(0).addClass('on');
    $part.eq(0).show();
    $tab.click(function(){
        var i = $(this).index();
        if(i!==index){
            change(function () {
                index = i;
            });
        }
    });
    auto();
    $banner.hover(function(){
        clearInterval(timer);
    },auto);
    function auto(){
        timer = setInterval(function () {
            change(function(){
                index++;
                index%=length;
            });
        },3000)
    };
    function change(fn){
        $tab.eq(index).removeClass('on');
        $part.eq(index).fadeOut(500);
        fn&&fn();
        $tab.eq(index).addClass('on');
        $part.eq(index).fadeIn(500);
    };
})();
(function(){
    var oPlay = document.getElementsByClassName('play-icon')[0];
    var oVideo = document.getElementsByTagName('video')[0];
    oPlay.onclick = function(){
        this.style.display = 'none';
        oVideo.style.display = 'block';
        oVideo.play();
    };
})();
(function () {
    var $ul = $('.classic .c-main ul'),
        $li = $ul.children(),
        $btn = $('.classic .c-btn div'),
        $tab = $('.classic .c-tab ul li'),
        width = $ul.children().eq(0).width(),
        length = $li.length,
        midIndex = Math.floor(length/2),
        clickTime = 0,
        sumWidth=0,
        timer;
    changeClassName();
    setTimeout(function(){
        sumWidth =0;
        $li.each(function(){
            sumWidth+=$(this).width();
        });
        $ul.css('marginLeft',-sumWidth/2+'px').css('opacity',1);
    },300);
    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            width = $ul.children().eq(0).width();
            sumWidth = 0;
            $li.each(function(){
                sumWidth+=$(this).width();
            });
            $ul.animate({'marginLeft' : -sumWidth/2+'px'},300);
        },300);
    });
    $btn.click(function () {
        if(new Date() - clickTime>350){
            clickTime = new Date();
            if($(this).index()){
                midIndex++;
                midIndex%=length;
                $ul.stop().animate({
                    'marginLeft':-sumWidth/2-width+'px'
                },300,function(){
                    $(this).css('marginLeft',-sumWidth/2+'px').append($(this).children().first());
                });
            }else{
                midIndex--;
                if(midIndex<0)midIndex=length-1;
                $ul.stop().animate({
                    'marginLeft':-sumWidth/2+width+'px'
                },300,function(){
                    $(this).css('marginLeft',-sumWidth/2+'px').prepend($(this).children().last());
                });
            }
            $tab.eq(midIndex).addClass('on').siblings().removeClass('on');
            changeClassName();
        }
    });
    function changeClassName(){
        var a=midIndex,
            b=midIndex+1,
            c=midIndex-1;
        if(b>=length)b=0;
        if(c<0)c=length-1;
        $tab.eq(a).addClass('on');
        $li.removeClass('mid slide');
        $li.eq(a).addClass('mid');
        $li.eq(b).addClass('slide');
        $li.eq(c).addClass('slide');
    };
})();
