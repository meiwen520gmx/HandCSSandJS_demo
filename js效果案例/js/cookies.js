/**
 * Created by gmx on 2018/4/17.
 */
function setCookie(name,value,iday){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iday);
    document.cookie=name+'='+value+';expires='+oDate;
}
function getCookie(name){
    var arr=document.cookie.split('; ');
    var temp='';
    var subArr=[];
    for(var i=0;i<arr.length;i++){
        subArr=arr[i].split('=');
        if(subArr[0]==name){
            temp=subArr[1];
            break;
        }
    }
    return temp;
}
function removeCookie(name){
    setCookie(name,1,-1);
}