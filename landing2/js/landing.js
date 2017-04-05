/**
 * Created by smzh on 2017/3/31.
 */
function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}

function myBrowser1(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
    var isChrome=userAgent.indexOf("Chrome") > -1; //判断是否Chrome浏览器
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 =IE9=IE10= false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        IE9 = fIEVersion == 9.0;
        IE10=fIEVersion==10.0;
        if (IE55) {
            return "IE55";
        }
        if (IE6) {
            return "IE6";
        }
        if (IE7) {
            return "IE7";
        }
        if (IE8) {
            return "IE8";
        }
        if (IE9) {
            return "IE9";
        }
        if (IE10) {
            return "IE10"
        }
    }//isIE end
    if (isFF) {
        return "FF";
    }
    if (isOpera) {
        return "Opera";
    }
    if(isChrome){
        return "Chrome";
    }
}//myBrowser() end
var br2video={"Chrome":"images/Sirens1_H264_HD.mp4","Safari":"images/Sirens1_DivX_HD.mp4","Opera":"images/Sirens1_HD.webm","IE":"images/Sirens1_HD.webm"};
function chooseVideo(){
    var broVer=myBrowser();
    $("#vshow").attr("src",br2video[broVer]);
}