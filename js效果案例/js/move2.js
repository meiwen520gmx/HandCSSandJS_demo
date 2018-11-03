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
    var speed,cur,flag;
    var aAttr=[];
    var json_length=0;
    for(var attr in json){
        json_length++;//�õ�json�ĳ�Ա����������
    }
    obj.timer=setInterval(function () {
        for(var attr in json){
            if(attr=='opacity'){
                cur=Math.round(parseFloat(getStyle(obj,'opacity'))*100);//�������
                    speed=(json[attr]-cur)/10;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);//�������0�Ͳ�����
                    if(cur==json[attr]){
                        flag=false;
                        for(var j=0;j<aAttr.length;j++){
                            if(aAttr[j]==attr){
                                flag=true;
                                break;
                            }
                        }
                        if(!flag){
                            aAttr.push(attr);
                        }

                        //clearInterval(obj.timer);
                        //if(func) func();
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
                        //clearInterval(obj.timer);
                         flag=false;
                        for(var j=0;j<aAttr.length;j++){
                            if(aAttr[j]==attr){
                                flag=true;
                                break;
                            }
                        }
                        if(!flag){
                            aAttr.push(attr);
                        }
                        //if(func) func();
                    }
                    else{
                        obj.style[attr]=cur+speed+'px';
                    }
            }
        };
        if(aAttr.length==json_length){
            clearInterval(obj.timer);
            if(func) func();
        }
    },30);


}/**
 * Created by gmx on 2018/4/10.
 */
