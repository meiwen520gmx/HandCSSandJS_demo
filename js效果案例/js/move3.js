function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,json,func){
    clearInterval(obj.timer);//��ֻ֤��һ����ʱ��,һ������ֻ����һ����ʱ��������Լ��Ķ�ʱ��
    var speed,cur;
    var otherJson=json;//���渱��
    obj.timer=setInterval(function () {
        for(var attr in json){
            if(attr=='opacity'){
                cur=Math.round(parseFloat(getStyle(obj,'opacity'))*100);//�������
                    speed=(json[attr]-cur)/10;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);//�������0�Ͳ�����
                    if(cur==json[attr]){
                        delete otherJson[attr];
                    }
                    else{
                        obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                        obj.style.opacity=(cur+speed)/100;
                    }
            }
            else{
                var n=0;
                cur=parseInt(getStyle(obj,attr));//ȥ������px
                    speed=(json[attr]-cur)/10;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    if(cur==json[attr]){
                        delete otherJson[attr];
                    }
                    else{
                        obj.style[attr]=cur+speed+'px';
                    }
            }
        }
        //��һ��
        //var otherJsonLength=0;
        //for(var attr2 in otherJson){
        //    otherJsonLength++;
        //}
        //if(otherJsonLength==0){
        //    clearInterval(obj.timer);
        //    if(func) func();
        //}
        //������
        if(JSON.stringify(otherJson)=='{}'){
            clearInterval(obj.timer);
            if(func) func();
        }
    },30);


}/**
 * Created by gmx on 2018/4/10.
 */
