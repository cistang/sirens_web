<?php
require_once '../include.php';
date_default_timezone_set("Asia/Shanghai");
$act=$_POST['act'];
switch ($act) {
	case "create":
		createUser();
		break;
	case "update":
		updateUser();
		break;
	case "getinfo":
		getUserInfo();
		break;
	default:
		$arr=array('status'=>'wrongact');
		$ret=json_encode($arr,JSON_UNESCAPED_UNICODE);
		die($ret);
}

/**
* 创建用户，在数据表中增加1条记录
* @date: 2016年8月10日 下午8:05:25
* @author: jonhn
* @return:
*/
function createUser(){
	$conn=connect(DB_HOST, DB_USER, DB_PWD, DB_DBNAME);
	$phoneno=mysqli_escape_string($conn,$_POST['phoneno']);
	$username=mysqli_escape_string($conn, $_POST['username']);
	$password=mysqli_escape_string($conn, $_POST['pwd']);
	//$location=mysqli_escape_string($conn, $_POST['loc']);
	if(array_key_exists("avatar", $_POST)){
		if($_POST['avatar']!=""){
			$avatar=mysqli_escape_string($conn, $_POST['avatar']);
		}
	}else{
		$avatar=null;
	}
	if(array_key_exists("devicetype",$_POST)){
		if($_POST['devicetype']!=""){
			$devicetype=mysqli_escape_string($conn,$_POST['devicetype']);
		}
	}else{
		$devicetype=null;
	}
	if(array_key_exists("loc",$_POST)){
		if($_POST['loc']!=""){
			$location=mysqli_escape_string($conn,$_POST['loc']);
		}
	}else{
		$location='00';
	}
	$createdate=date("Y-m-d");
	$modidate=date("Y-m-d H:i:s");
	$sid='usr_'.getUniString(); //获取唯一id

	//将用户数据插入siUser中
	$data=array("sid"=>charlizeString($sid),"phoneno"=>charlizeString($phoneno),"username"=>charlizeString($username),"password"=>charlizeString($password),"locationGP"=>charlizeString($location),"avatar"=>charlizeString($avatar),"devicetype"=>charlizeString($devicetype),"createdate"=>"now()","modidate"=>"now()");
	$createSiuRet=insert($conn,"siUser",$data);
	
	//将用户数据插入ofUser中；
	$cdate=getMilli();
	$mdate=getMilli();
	$conn1=connect(OF_HOST, OF_USER, OF_PWD, OF_DBNAME);
	$data1=array('username'=>charlizeString($phoneno),'plainPassword'=>charlizeString($password),'creationDate'=>charlizeString($cdate),'modificationDate'=>charlizeString($mdate),'name'=>charlizeString($username),'email'=>charlizeString($phoneno.EML));
	$createOFURet=insert($conn1,"ofUser",$data1);

	switch($createSiuRet){
		case "0":
			$errValue='';
			break;
		case "1062":
			$errValue='手机号已存在';
			break;
		default:
			$errValue='其它故障';
			break;
	}	
	/*
	$cheSql="select sid from siUser where phoneno=".$phoneno;
	$queryResult=mysqli_query($conn,$cheSql);
	if(mysqli_fetch_assoc($queryResult)['sid']){
		$retRes='success';
	}else{
		$retRes='failed';
	}*/
	
	if((!$createSiuRet)&&(!$createOFURet)){
		$retRes='success';
	}else{
		$retRes='failed';
	}
	
	$retStatus=array('result'=>$retRes);

	$retError=array('value'=>$errValue);
//array_walk_recursive($retError, 'jsonFormatProtect');
	$retErrorJson=json_encode($retError,JSON_UNESCAPED_UNICODE); //JSON_UNESCAPED_UNICODE,让json库不对中文进行编码
//	$retErrorJson='{"value":"'.$errValue.'"}';
	
	$ret=array("status"=>$retRes,'error'=>$retErrorJson);
	echo json_encode($ret,JSON_UNESCAPED_UNICODE);	
	/*if($createOFURet&&$createSiuRet){
		$ret=array('result'=>1);
		echo json_encode($ret);
		//return "created";
	}else {
		$ret=array('result'=>0);
		echo json_encode($ret);
		//return "create failed";
	}*/
}


function updateUser(){
	$phoneno=$_POST['phoneno'];
	if(array_key_exists('username', $_POST)){
		if($_POST['username']!=""){
			$username=$_POST['username'];
		}else{
			$username=null;
		}
	}
	if(array_key_exists('pwd',$_POST)){
		if($_POST['pwd']!=""){
			$password=$_POST['pwd'];
		}else{
			$password=null;
		}
	}
	if(array_key_exists('loc', $_POST)){
		if($_POST['loc']!=""){
			$location=$_POST['loc'];
		}else{
			$location=null;
		}
	}
	if(array_key_exists('avatar', $_POST)){
		if($_POST['avatar']!=""){
			$avatar=$_POST['avatar'];
		}else{
			$avatar=null;
		}
	}
	if(array_key_exists('devicetype', $_POST)){
		if($_POST['devicetype']!=""){
			$devicetype=$_POST['devicetype'];
		}else{
			$devicetype=null;
		}
	}
	$where='phoneno='.charlizeString($phoneno);
	$conn=connect(DB_HOST, DB_USER, DB_PWD, DB_DBNAME);
	$data=array('username'=>$username,'password'=>$password,'locationGP'=>$location,'avatar'=>$avatar,'devicetype'=>$devicetype,"modidate"=>date("Y-m-d"));
	$updateRet=update($conn, 'siUser', $data,$where);
	/*
	 * 根据改变的数据表的行数，判断update成功与否
	 * affected row num 为0，则返回failed；
	 * 不为0，则返回success
	 */
	if($updateRet){
		$tmp=array('status'=>'update success');
	}else{
		$tmp=array('status'=>'update failed');
	}
	
	/*if($updateRet['errorno']==0){
		$tmp=array('status'=>'update success');
	}else{
		$tmp=array('status'=>'update failed','error'=>$updateRet['error']);
	}*/
	$ret=json_encode($tmp,JSON_UNESCAPED_UNICODE);
	echo $ret;
}

function getUserInfo(){
	$conn=connect(DB_HOST, DB_USER, DB_PWD, DB_DBNAME);
	$tableName='siUser';
	$pkName='phoneno';
	$pkVal=$_POST[$pkName];
	
	$userInfoColumns=array('sid','phoneno','username','locationGP','avatar','devicetype','createdate','modidate'); //需要获取的字段名称
	$colsSqlStr=join(',', $userInfoColumns); 
	$sql='select '.$colsSqlStr.' from '.$tableName.' where '.$pkName.'='.charlizeString($pkVal); //拼装sql查询语句
	$ret=mysqli_query($conn, $sql);
	$qResult=mysqli_fetch_assoc($ret);
	if($qResult){
		$qResult['status']='success';
		$jRet=json_encode($qResult,JSON_UNESCAPED_UNICODE);
	}else{
		$tmpRet=array('status'=>'wrongphoneno');
		$jRet=json_encode($tmpRet,JSON_UNESCAPED_UNICODE);
	}
	echo $jRet;
	//echo $ret;
}
