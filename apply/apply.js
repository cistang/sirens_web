var usrloaded=false;
var winWidth;

window.onresize=function(){
	moveBgImg("#applybg");
	setActiveDivMarginWd("#applyActionDiv",900);
	setActiveDivMargin("#head_actiondiv");
	setActiveDivMarginWd("#footer_actiondiv",536);
	moveDivMiddle("#userloaddiv");
	var divleft=$("#userloaddiv").css("left");
	var divtop=$("#userloaddiv").css("top");
	var reg1=/\d+/;
	var cbtnleft0=reg1.exec(divleft)[0];
	var cbtnleft=parseInt(cbtnleft0)+480;
	var cbtntop=parseInt(reg1.exec(divtop)[0])-20;
	$("#userloadclosebtn").css("left",cbtnleft+"px");
	$("#userloadclosebtn").css("top",cbtntop+"px");
}

window.onload=function (){
	$("body").find(".test1").css("pointer-events",'none'); //禁用鼠标事件
	moveDivMiddle("#userloaddiv");
	$("body").find(".test1").addClass("transparent_class");
	$("#userloaddiv").css("visibility","visible");
	$("#userloadclosebtn").css("visibility","visible");
	//将叉叉附在登录弹窗右上角
	var divleft=$("#userloaddiv").css("left");
	var divtop=$("#userloaddiv").css("top");
	var reg1=/\d+/;
	var cbtnleft0=reg1.exec(divleft)[0];
	var cbtnleft=parseInt(cbtnleft0)+480;
	var cbtntop=parseInt(reg1.exec(divtop)[0])-20;
	$("#userloadclosebtn").css("left",cbtnleft+"px");
	$("#userloadclosebtn").css("top",cbtntop+"px");
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

/*弹出登陆弹窗*/
function showLoadDiv(){
	$("body").find(".test1").css("pointer-events",'none'); //禁用鼠标事件
	moveDivMiddle("#userloaddiv");
	$("body").find(".test1").addClass("transparent_class");
	$("#userloaddiv").css("visibility","visible");
	$("#userloadclosebtn").css("visibility","visible");
	//将叉叉附在登录弹窗右上角
	var divleft=$("#userloaddiv").css("left");
	var divtop=$("#userloaddiv").css("top");
	var reg1=/\d+/;
	var cbtnleft0=reg1.exec(divleft)[0];
	var cbtnleft=parseInt(cbtnleft0)+480;
	var cbtntop=parseInt(reg1.exec(divtop)[0])-20;
	$("#userloadclosebtn").css("left",cbtnleft+"px");
	$("#userloadclosebtn").css("top",cbtntop+"px");
}

/*提交申请信息*/

/*点击体检计划文本框后，提示文字消失*/
function focusapplyplan(){
	if(usrloaded){
		document.getElementById("applyplan").innerHTML="";
		$("#applyplan").css("color","#FFFFFF");
		$("#applyplan").css("font-size","16px");
	}else{
		//showUserLoadDiv();
	}
};

function submitApplicationInfo(){
	if(readPrivacyChecked===0){
		alert("请确认您已阅读《个人信息保护政策》");
		return;
	}
	var age=$("#ageinfo").val();
	var gender=$("#genderinfo").val();
	var plan=$("#applyplan").val();
	$.post('adminphp/user/apply.php',{act:"applyinfo",age:age,gender:gender,plan:plan},function(result){
		if(result=="0"){
			alert("提交成功");
			$("#submit_img").attr('src','images/submitted_btn.png');
			$("body").find(".test1").css("pointer-events",'none'); //禁用鼠标事件
			moveDivMiddle("#addressinfodiv");
			$("body").find(".test1").addClass("transparent_class");
			$("#addressinfodiv").css('visibility','visible');
		}else if(result=="1"){
			alert("请登陆后再提交");
			showLoadDiv();
		}else if(result=='2'){
			alert("您已提交过申请信息");
			return;
		}else if(result=='3'){
			alert("提交申请信息失败，请重试");
			return;
		}
	});

}

/*按下登录按钮事件函数*/
function loadbtnclick(usrname,usrpwd){
	if(usrname==''){
	    alert('请输入用户邮箱');	
	}else if(usrpwd==''){
		alert('请输入密码');
	} else {
		$.post("adminphp/user/dologin.php", {usrname : usrname,usrpwd : usrpwd}, function(result) {
			if (result == "0") {
				$("#userloaddiv").css("visibility", "hidden");
				$("#userloadclosebtn").css("visibility", "hidden");
				$("body").find(".test1").removeClass("transparent_class");
				$("body").find(".test1").css("pointer-events", "auto");
				usrloaded = true;
			} else if (result == "1") {
				alert('邮箱地址格式不正确，请重新输入');
			} else if (result == "2") {
				alert('用户不存在，请重新输入或注册用户');
			} else if (result == "3") {
				alert('密码不正确，请重新输入');
			}
		});
	}
}

//按下叉叉事件函数
function userloadclosebtnclick(){
	$("#userloaddiv").css("visibility","hidden");
	$("#userloadclosebtn").css("visibility","hidden");
	$("body").find(".test1").removeClass("transparent_class");
	$("body").find(".test1").css("pointer-events","auto");
	$("#applyinfo").find("select").attr("onclick","showUserLoadDiv()");
//	$("#applyinfo").find("textarea").attr("onclick","showUserLoadDiv()");
	usrloaded=false;
}
function showUserLoadDiv(){
	if (!usrloaded) {
		$("body").find(".test1").css("pointer-events", 'none'); // 禁用鼠标事件
		moveDivMiddle("#userloaddiv");
		$("body").find(".test1").addClass("transparent_class");
		$("#userloaddiv").css("visibility", "visible");
		$("#userloadclosebtn").css("visibility", "visible");
		$("#applyinfo").find("option").css("visibility","hidden");
	}
}

/*
 * 收货地址窗口事件
 */

//保存地址按钮函数
function saveaddressbtnclick(){
	var name=$("#receivername").val();
	var province=$("#provincename").val();
	var city=$("#cityname").val();
	var address=$("#detailedaddress").val();
	var zipcode=$("#zonecode").val();
	var phoneno=$("#phoneno").val();
	if(name==""||address==""||phoneno==""){
		alert("信息不完整，请补充");
		return;
	}
	var fulladdress=province+city+address;
	$.post('adminphp/user/apply.php',{act:"addressinfo",recvname:name,address:fulladdress,zipcode:zipcode,phoneno:phoneno},function(result){
		if(result=="0"){
			alert('地址信息提交成功');
			$("#addressinfodiv").css("visibility","hidden");
			$("body").find(".test1").removeClass("transparent_class");
			$("body").find(".test1").css("pointer-events","auto");
		}else if(result=="1"){
			alert("用户未登陆");
		}else if(result=='2'){
			alert("手机号不符合正确格式");
		}else if(result=='3'){
			alert("已提交过地址信息");
		}else if(result=='4'){
			alert("提交地址信息失败，请重试");
		}
	});	
}

//取消按钮事件
function quitbtnclick(){
	$("#addressinfodiv").css("visibility","hidden");
	$("body").find(".test1").removeClass("transparent_class");
	$("body").find(".test1").css("pointer-events","auto");
}