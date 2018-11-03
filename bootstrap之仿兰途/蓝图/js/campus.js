/**
 * Created by Administrator on 2017/3/13.
 */

(function () {
    var $content = $('.content');
    var $part1 = $('.content .part1');
    $(window).resize(part1H);
    part1H();
    function part1H(){
        var winH = $(window).height();
        $part1.height(winH-parseFloat($content.css('margin')));
    };
})();
(function () {
    var $threeLi = $('.part3 .wrap .three ul li'),
        $secondLi = $('.part3 .wrap .second ul li'),
        length = $threeLi.length,
        index = 0,
        timer;
    auto();
    $threeLi.click(function(){
        clearInterval(timer);
        index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $secondLi.eq(index).show().siblings().hide();
        auto();
    });
    function auto(){
        timer = setInterval(function () {
            index++;
            index%=length;
            $threeLi.eq(index).addClass('active').siblings().removeClass('active');
            $secondLi.eq(index).show().siblings().hide();
        },3000);
    };
})();
(function () {
    var $part = $('.content .part');
    $part.find('.btn').click(function () {
        var index = $(this).parents('.part').index('.part');
        var scrollTop = $part.eq(index+1).offset().top-($(window).height()-$part.eq(index+1).height()+71)/2;
        $('body,html').animate({
            scrollTop : scrollTop
        },800);
    });
})();