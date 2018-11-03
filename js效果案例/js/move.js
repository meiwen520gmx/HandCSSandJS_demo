function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,attr,iTarget,func){
    clearInterval(obj.timer);//保证只有一个定时器,一个对象只能有一个定时器，清除自己的定时器
    var speed,cur;
    if(attr=='opacity'){
        cur=Math.round(parseFloat(getStyle(obj,attr))*100);//变成整数
        obj.timer=setInterval(function(){
            speed=(iTarget-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);//避免出现0就不动了
            if(cur==iTarget){
                clearInterval(obj.timer);
                if(func) func();
            }
            else{
                cur+=speed;
                obj.style.filter='alpha(opacity:'+cur+')';
                obj.style.opacity=cur/100;
            }
        },30);
    }
    else{
        cur=parseInt(getStyle(obj,attr));//去掉像素px
        obj.timer=setInterval(function(){
            speed=(iTarget-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(cur==iTarget){
                clearInterval(obj.timer);
                if(func) func();
            }
            else{
                cur+=speed;
                obj.style[attr]=cur+'px';
            }
        },30);
    }
}/**
 * Created by gmx on 2018/4/10.
 */
