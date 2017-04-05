var winWidth;

window.onresize=function(){
	setActiveDivMargin(".nav_actiondiv",1100);
	setActiveDivMargin("#mainactiondiv",1100);
	setActiveDivMargin("#footer_actiondiv",536);
	moveBgImg("#shopbgimg");
}

function setWinWidth(){
	if(window.innerWidth){
		winWidth=window.innerWidth;
	}else{
		winWidth=document.body.clientWidth;
	}
}

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