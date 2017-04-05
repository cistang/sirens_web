
function setActiveDivMarginWd(parid,parwidth){
	setWinWidth();
	if(winWidth>parwidth){
		var dis=(winWidth-parwidth)/2;
		var dispx=dis+"px";
		$(parid).css("left",dispx);
	}else{
		$(parid).css("left","0px");
	}
}
function setWinWidth(){
	if(window.innerWidth){
		winWidth=window.innerWidth;
	}else{
		winWidth=document.body.clientWidth;
	}
}
var winWidth;
window.onresize=function(){
	setActiveDivMarginWd("#titleActionDiv",1100);
	setBgImgWidth();
	moveBgImg("#titleBg");
}
/*随着窗口大小的变化，移动背景底图，使得背景底图的主体始终居于正中*/
function moveBgImg(bgpar){
	var imgWidth0=$(bgpar).css("width");
	var reg1=/\d+/;
	var imgWidth=reg1.exec(imgWidth0)[0];
	if(winWidth<imgWidth){
		var cha=(imgWidth-winWidth)/2;
		var offset="-"+cha+"px";
		$(bgpar).css("margin-left",offset);
	}else{
		$(bgpar).css("margin-left","0px");
	}
}
function setBgImgWidth(){
	var winHeight=$(window).height();
	if(winHeight<852){
		var parwid=(winHeight/852)*2560;
		var wid=parwid+"px";
		var hei=winHeight+"px";
		$("#titleBg").css('width',wid);
		$("#titleBg").css('height',hei);
	}else{
		$("#titleBg").css('width',"2560px");
		$("#titleBg").css('height',"852px");
	}
}