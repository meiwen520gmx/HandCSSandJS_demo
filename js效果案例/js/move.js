function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,attr,iTarget,func){
    clearInterval(obj.timer);//��ֻ֤��һ����ʱ��,һ������ֻ����һ����ʱ��������Լ��Ķ�ʱ��
    var speed,cur;
    if(attr=='opacity'){
        cur=Math.round(parseFloat(getStyle(obj,attr))*100);//�������
        obj.timer=setInterval(function(){
            speed=(iTarget-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);//�������0�Ͳ�����
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
        cur=parseInt(getStyle(obj,attr));//ȥ������px
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
