/*
 * 处理女用图片轮播

var fi=1;
var femaleImages=new Array();
femaleImages[0]="images/image_2_1.jpg";
femaleImages[1]="images/image_2_2.jpg";
femaleImages[2]="images/image_2_3.jpg";
femaleImages[3]="images/image_2_4.jpg";
var maleImages=new Array();
maleImages[0]="images/image_3_1.jpg";
maleImages[1]="images/image_3_2.jpg";
maleImages[2]="images/image_3_3.jpg";
maleImages[3]="images/image_3_4.jpg";

var femaleImgsNum=3;
function changeImage1(){
	if(fi==0){
		$("#femaleImg2").removeClass("active");
	}else{
		$("#femaleImg"+(fi-1)).removeClass("active");
	}
	if(fi==femaleImgsNum){
		fi=0;
	}
	document.getElementById('femaleProductImage').src=femaleImages[fi];
	$("#femaleImg"+(fi)).addClass("active");
	fi++;
}
var form1;
function startImage1Form(){
	changeImage1();
	form1=window.setInterval(changeImage1,3000);
}

function stopImage1Form(){
	window.clearInterval(form1);
	//document.getElementById('femaleProductImage').src=femaleImages[2];
	//document.getElementById('titleImage').style.display="block";
}*/

/*
 * 处理男用图片轮播
 
var mi=1;
var maleImgsNum=3;
var maleImages=new Array();
maleImages[0]="newimages/male_fit_01.jpg";
maleImages[1]="newimages/male_fit_02.jpg";
maleImages[2]="newimages/male_fit_03.jpg";
function changeImage2(){
	if(fi==0){
		$("#maleImg"+(maleImgsNum-1)).removeClass("active");
	}else{
		$("#maleImg"+(mi-1)).removeClass("active");
	}
	if(mi==maleImgsNum){
		mi=0;
	}
	$("#maleProductImage").fadeOut("slow");
	document.getElementById('maleProductImage').src=maleImages[mi];
	$("#maleProductImage").fadeIn("slow");
	
	$("#maleImg"+(mi)).addClass("active");
	mi++;
}

var form2;
function startImage2Form(){
	//document.getElementById('titleImage').style.display="none";
	changeImage2();
	form2=window.setInterval(changeImage2,3000);
}

function stopImage2Form(){
	window.clearInterval(form2);
	//document.getElementById('titleImage').style.display="block";
	//document.getElementById('maleProductImage').src=maleImages[2];
}

function showObject(par1,par2){
	document.getElementById(par1).style.display="block";
	document.getElementById(par2).style.display="none";
	document.getElementById(par2).innerHTML='<pre>';
}
*/
//处理点击文字切换图片
/*var chosenImg="images/img_chosen.png";
var unchoseImg="images/img_unchosen.png";*/

/*
 * 点击文字切换图片，并切换文字效果的函数；
 * pref为female或male，parid指1 2 3 4等序号，total指总共有几个文字块,images指的是存放图片文件的数组。
 */
/*function responseText2Img(pref,parid,total,images){
	var pno="#"+pref+"No"+parid;
	//var productImg="#"+pref+"ProductImage";
	var productImg="#"+pref+"bg";
	var pbar="#"+pref+"Bar"+parid;
	$(pno).mouseenter(function(){
		$(productImg).attr('src',images[parid-1]);
		$(pbar).attr('src',chosenImg);
		$(pno).css('color',"#D3851c");
		for(var i=0;i<total;i++){
			var tmp=i+1;
			if(tmp==parid){
				continue;
			}
			$("#"+pref+"No"+tmp).css("color","#808080");
			$("#"+pref+"Bar"+tmp).attr('src',unchoseImg);
		}
	});*/
	/*
	$(pno).mouseleave(function(){
		$(pno).removeClass("active");
		//$(pbar).attr('src',unchoseImg);
	});

}*/

$(document).ready(function(){
	/*responseText2Img('female',1,4,femaleImages);
	responseText2Img('female',2,4,femaleImages);
	responseText2Img('female',3,4,femaleImages);
	responseText2Img('female',4,4,femaleImages);
	responseText2Img('male',1,4,maleImages);
	responseText2Img('male',2,4,maleImages);
	responseText2Img('male',3,4,maleImages);
	responseText2Img('male',4,4,maleImages);*/
});

/*start:调整活动区位置至水平居中*/
var winWidth;
window.onresize=function(){
	setActiveDivMarginWd(".head_actiondiv",1100);
	setActiveDivMarginWd("#regActionDiv",1100);
	setActiveDivMarginWd("#textDespActionDiv",1100);
	setActiveDivMarginWd("#imgsActionDiv",1100);
	setActiveDivMarginWd("#titleActionDiv",1100);
	setActiveDivMarginWd("#brandStoryActionDiv",1100);
	setActiveDivMarginWd("#ISFActionDiv",1100);
	setActiveDivMarginWd("#vshow",1100);
	setActiveDivMarginWd("#mgActionDiv",1100);

	setBgImgWidth();
	moveBgImg("#titleBg");
	moveBgImgWd("#reddotImg",2560);
	moveBgImgWd("#mgimg",2560);
	/*var children=new Array('p','a');
	keepChildrenMiddle("#vrActionDiv",children);
	keepChildrenMiddle("#condomActionDiv",children);
	children=new Array('p','a','img');
	keepChildrenMiddle("#followActionDiv",children);*/
}
function setWinWidth(){
	if(window.innerWidth){
		winWidth=window.innerWidth;
	}else{
		winWidth=document.body.clientWidth;
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

/*随着窗口大小的变化，移动背景底图，使得背景底图的主体始终居于正中*/
function moveBgImgWd(bgpar,imgWidth){
	setWinWidth();
	if(winWidth<imgWidth){
		var cha=(imgWidth-winWidth)/2;
		var offset="-"+cha+"px";
		$(bgpar).css("margin-left",offset);
	}else{
		$(bgpar).css("margin-left","0px");
	}
}
function moveBgImg(bgpar){
    setWinWidth();
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

/*保持活动区里面的子元素始终居中显示*/
function keepChildrenMiddle(divid,tags){
	setWinWidth();
	var divwidth_px=$(divid).css("width");
	var reg1=/\d+/;
	var divwidth=reg1.exec(divwidth_px);
	var referenceWidth=divwidth;
	if(winWidth<divwidth){
		referenceWidth=winWidth;
	}
	
	for(var i=0;i<tags.length;i++){
		var curwidth_px=$(divid).children(tags[i]).css("width");
		var curwidth=reg1.exec(curwidth_px);
		var offset=(referenceWidth-curwidth)/2;
		$(divid).children(tags[i]).css("left",offset+"px");
		/*$(divid).children(tags[i]).each(function(i,n){
			var curwidth_px=$(n).css("width");
			var curwidth=reg1.exec(curwidth_px);
			var offset=(referenceWidth-curwidth)/2;
			$(n).css("left",offset+"px");
		})*/
		
	}
}

/*点击注册框里的SUBMIT按钮事件*/
function regSubmit(){
	var fname=$("#reg_fullname").val();
	var remail=$("#reg_email").val();
	if(fname===""||remail===""){
		alert("Please complete your information before submit.");
		return;
	}


	$.post("adminphp/user/landing.php", {usrname : fname,usremail : remail}, function(result) {
		if (result == "0") {
			$("#regtext").html("Thank you for Signing Up!");
			$("#regform").remove();
			$("#regbutt").remove();
			$("#part2After").css("visibility","visible");
			$("#regdiv").css("height","80px");
			$("#regActionDiv").css("height","80px");
		} else if (result == "3") {
			alert('Failed to submit, please try again.');
		} else if(result=="1"){
			alert("The email address has been used already.")
		} else if(result=="2"){
			alert("Wrong email address, please input again.")
		}
	});
}

/*左移右移how to be outstanding的图片*/
var htbImages=new Array();
htbImages[0]="images/image_2_1.jpg";
htbImages[1]="images/image_3_1.jpg";
//htbImages[2]="../images/image_2_3.jpg";
var htbtexts=new Array();
htbtexts[0]="#htbimgtext0";
htbtexts[1]="#htbimgtext1";
//htbtexts[2]="#htbimgtext2";
function displaydiv(divs,divno){
	for(var i=0;i<divs.length;i++){
		if(i===divno){
			$(divs[i]).css("display","block");
		} else{
			$(divs[i]).css("display","none");
		}
	}
}
var imgno=0;
function leftenImg(){
	if(imgno==0)
		imgno=1;
	else
		imgno--;
	$("#reddotImg").attr("src",htbImages[imgno]);
	moveBgImgWd("#reddotImg",2560);
	displaydiv(htbtexts,imgno);
}

function rightenImg(){
	if(imgno===1)
		imgno=0;
	else
		imgno++;
	$("#reddotImg").attr("src",htbImages[imgno]);
	moveBgImgWd("#reddotImg",2560);
	displaydiv(htbtexts,imgno);
}
