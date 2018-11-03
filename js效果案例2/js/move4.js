function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,json,func){
    clearInterval(obj.timer);//保证只有一个定时器,一个对象只能有一个定时器，清除自己的定时器
    var speed,cur,flag,bStop;
    //每30毫秒判断一次bStop，只要bStop为false就继续执行，重新把bStop赋值为true，当bStop为true时才关闭定时器，利用bStop为true来判断所有元素都到达没有
    obj.timer=setInterval(function () {
        for(var attr in json){
            bStop=true;
            if(attr=='opacity'){
                cur=Math.round(parseFloat(getStyle(obj,'opacity'))*100);//变成整数
                    speed=(json[attr]-cur)/10;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);//避免出现0就不动了
                if(cur!=json[attr]){
                    bStop=false;
                    obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                    obj.style.opacity=(cur+speed)/100;
                }
            }
            else{
                var n=0;
                cur=parseInt(getStyle(obj,attr));//去掉像素px
                    speed=(json[attr]-cur)/10;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if(cur!=json[attr]){
                    bStop=false;
                    obj.style[attr]=cur+speed+'px';
                    }
            }
        }
        if(bStop){
            clearInterval(obj.timer);
            if(func) func();
        }
    },30);


}/**
 * Created by gmx on 2018/4/10.
 */
