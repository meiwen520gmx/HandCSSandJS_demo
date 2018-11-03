/**
 * Created by Administrator on 2017/3/16.
 */

(function(){
    var $pre = $('.container .c-list .c-btn .pre'),
        $next = $('.container .c-list .c-btn .next'),
        $list1 = $('.container .c-list .list1'),
        $list2 = $('.container .c-list .list2');
    $pre.click(function(){
        $list1.css('display','block');
        $list2.css('display','none')
    });
    $next.click(function () {
        $list2.css('display','block');
        $list1.css('display','none')
    });
})();