var area = document.getElementById('box');
var one = document.getElementById('one');
var two = document.getElementById('two');
two.innerHTML = one.innerHTML;
//    利用BOX盒子内部的内容可滚动的特点实现无缝滚动,将box的overflow设为auto即可看出;
area.scrollTop = 0;
var time = 30;
var myScroll = setInterval(scrollUp, time);
area.onmouseover = function () {
    clearInterval(myScroll);
    }
area.onmouseout = function () {
    myScroll = setInterval(scrollUp, time);
    }
function scrollUp() {
    if (area.scrollTop >= one.offsetHeight) {
    area.scrollTop = 0;
    } else {
    area.scrollTop++;
    }
    }
