<?php
require_once '../include.php';
$conn = connect ( DB_HOST, DB_USER, DB_PWD, DB_DBNAME );
$usrname = mysqli_escape_string($conn,$_POST ['usrname']);
/*$usrname=$_POST['usrname'];
echo "name:".$usrname."\n";
$usrname=addslashes($usrname);
echo "name2:".$usrname."\n";*/
$usremail = mysqli_escape_string($conn,$_POST ['usremail']);
if (tableexist ( $conn, 'tb_landing', "usremail='" . $usremail . "'" )) {
	echo 1; // 该邮箱已经注册过
	exit ();
}
if (! checkEmailAddress ( $usremail )) {
	echo 2; // 邮件不符合格式要求
	exit ();
}
$sql = "insert into tb_landing(usrname,usremail,submittime) values('" . $usrname . "','" . $usremail . "',now())";
// echo $sql;
mysqli_query ( $conn, $sql );
$res = mysqli_errno ( $conn );
if ($res == '0') {
	echo 0;
	exit ();
} else {
	echo 3; // 提交注册信息失败
	exit ();
}

?>