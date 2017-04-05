<?php
require_once '../include.php';
$conn=connect(DB_HOST, DB_USER, DB_PWD, DB_DBNAME);
$userEmail=$_POST['usrname'];
$userEmail=mysqli_escape_string($conn,$userEmail);
$passwd=mysqli_escape_string($conn,$_POST['usrpwd']);
$passwd=md5($passwd);
//$loginresult=0;
if(!checkEmailAddress($userEmail)){
	echo 1; //邮箱地址格式不正确
	exit;
}
if(!tableexist($conn,'tb_userpd',"userEmail='".$userEmail."'")){
	echo 2; //用户不存在
	exit;
}
$where="userEmail='".$userEmail."' and passwd='".$passwd."'";
if(tableexist($conn,'tb_userpd',$where)){
	session_start();
	$_SESSION['userEmail']=$userEmail;
	echo 0; //登录成功
	exit;
}else{
	echo 3;//密码不正确
	exit;
}

?>