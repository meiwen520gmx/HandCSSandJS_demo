/**
 * Created by gmx on 2018/4/14.
 */
function getAjaxData(method,url,func,data){//json数据和纯文本都能用
    var oAjax=new XMLHttpRequest();//准备手机
    oAjax.open(method,url+'?time='+new Date().getTime(),true);//拨号
    if(method=='post') oAjax.send(data);//我先说话
    else oAjax.send();//我先说话
    oAjax.onreadystatechange= function () {//接收返回的信息，服务器把数据传到客户端，然后执行这个事件
        if(oAjax.readyState==4){
            if(oAjax.status==200){
                var str=oAjax.responseText;
                var result=str[0]=='['?eval(str):str;
                if(func)func(result);
            }
            else{alert('error!');}
        }
    }
}