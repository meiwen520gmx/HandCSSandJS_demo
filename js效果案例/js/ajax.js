/**
 * Created by gmx on 2018/4/14.
 */
function getAjaxData(method,url,func,data){//json���ݺʹ��ı�������
    var oAjax=new XMLHttpRequest();//׼���ֻ�
    oAjax.open(method,url+'?time='+new Date().getTime(),true);//����
    if(method=='post') oAjax.send(data);//����˵��
    else oAjax.send();//����˵��
    oAjax.onreadystatechange= function () {//���շ��ص���Ϣ�������������ݴ����ͻ��ˣ�Ȼ��ִ������¼�
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