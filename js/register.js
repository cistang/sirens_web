var usrloaded=false;
var winWidth;

window.onresize=function(){
	setActiveDivMarginWd("#registerActionDiv",900);
	setActiveDivMargin("#head_actiondiv");
	setActiveDivMarginWd("#footer_actiondiv",536);
}

window.onload=function (){
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

function setActiveDivMargin(parid){
	setWinWidth();
	var divwidth=$(parid).css("width");
	var reg1=/\d+/;
	var parwidth=reg1.exec(divwidth)[0];
	if(winWidth>parwidth){
		if(parid===".head_actiondiv"){
			$(parid).css("width","1100px");
		}
		var dis=(winWidth-parwidth)/2;
		var dispx=dis+"px";
		$(parid).css("left",dispx);
	}else{
		if(parid===".head_actiondiv"){
			$(parid).css("width",winWidth+"px");
		}else{
			$(parid).css("left","0px");
		}
	}
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

/*保持div水平垂直方向都居中*/
function moveDivMiddle(parid){
	setWinWidth();
	var winHeight=$(window).height();
	var parWidth0=$(parid).css("width");
	var parHeight0=$(parid).css("height");
	var reg1=/\d+/;
	var parWidth=reg1.exec(parWidth0)[0];
	var parHeight=reg1.exec(parHeight0)[0];
	if(winWidth>parWidth){
		var cha=(winWidth-parWidth)/2;
		var offset=cha+"px";
		$(parid).css("left",offset);
	}else{
		$(parid).css("left","0px");
	}
	if(winHeight>parHeight){
		var cha=(winHeight-parHeight)/2;
		var offset=cha+"px";
		$(parid).css('top',offset);
	}else{
		$(parid).css("top","0px");
	}
}

/*选中信息保护政策*/
var readPrivacyChecked=0;
function checkPrivacy(){
	if(readPrivacyChecked===0){
		readPrivacyChecked=1;
		$("#check_img").attr('src',"images/checked.png");
	}else{
		readPrivacyChecked=0;
		$("#check_img").attr('src',"images/unchecked.png");
	}
}

/*提交申请信息*/
function submitRegisterInfo(){
	if(readPrivacyChecked===0){
		alert("请确认您已阅读《个人信息保护政策》");
		return;
	}
	var email=$("#registeremail").val();
	var pwd1=$("#registerpwd").val();
	var pwd2=$("#repeatpwd").val();
	if(pwd1!=pwd2){
		alert("两次输入的密码不一致，请重新输入密码");
		return;
	}
	$.post('adminphp/user/apply.php',{act:"register",email:email,pwd1:pwd1,pwd2:pwd2},function(result){
		if(result=="0"){
			alert("注册成功,请登陆");
			history.back();
		}else if(result=="1"){
			alert("两次密码不一致，请重试");
			showLoadDiv();
		}else if(result=='2'){
			alert("邮件不符合格式要求，重新输入");
			return;
		}else if(result=='3'){
			alert("邮箱已注册");
			return;
		}else if(result=='4'){
			alert("提交注册信息失败，请重试");
			return;
		}
	});

}
