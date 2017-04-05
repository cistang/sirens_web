<?php 
require_once '../include.php';
$act=$_POST['act'];
if ($act == "register") {
	$conn = connect ( DB_HOST, DB_USER, DB_PWD, DB_DBNAME );
	$email = mysqli_escape_string ( $conn, $_POST ['email'] );
	$pwd1 = mysqli_escape_string ( $conn, $_POST ['pwd1'] );
	$pwd2 = mysqli_escape_string ( $conn, $_POST ['pwd2'] );
	if ($pwd1 != $pwd2) {
		echo 1; // 两次密码输入不一致
		exit ();
	}
	if (! checkEmailAddress ( $email )) {
		echo 2; // 邮件不符合格式要求
		exit ();
	}
	if (tableexist ( $conn, 'tb_userpd', "userEmail='" . $email . "'" )) {
		echo 3; // 该邮箱已经注册过
		exit ();
	}
	$pwd=md5($pwd1);
	$sql = "insert into tb_userpd(userEmail,passwd) values('" . $email . "','" . $pwd . "')";
	//echo $sql;
	mysqli_query ( $conn, $sql );
	$res = mysqli_errno ( $conn );
	if ($res == '0') {
		echo 0;
		exit ();
	} else {
		echo 4; // 提交注册信息失败
		exit ();
	}
}else 
 {
	if (! isset ( $_SESSION ['userEmail'] )) {
		echo 1; // 未登陆
		exit ();
	} else {
		$userEmail = $_SESSION ['userEmail'];
		// echo $userEmail;
		
		if ($act == "applyinfo") {
			$age = $_POST ['age'];
			$gender = $_POST ['gender'];
			$plan = $_POST ['plan'];
			$conn = connect ( DB_HOST, DB_USER, DB_PWD, DB_DBNAME );
			if (tableexist ( $conn, 'tb_applyinfo', "userEmail='" . $userEmail . "'" )) {
				echo 2; // 已提交过信息
				exit ();
			}
			$age = mysqli_escape_string ( $conn, $age );
			$gender = mysqli_escape_string ( $conn, $gender );
			$plan = mysqli_escape_string ( $conn, $plan );
			$applytime = date ( "Y-m-d H:i:s" );
			
			// 将用户数据插入tb_applyinfo中
			/*
			 * $data=array("userEmail"=>$userEmail,"userAge"=>$age,"userGender"=>$gender,"applyplan"=>$plan,"applytime"=>"now()");
			 * $insertRet=insert($conn,"tb_applyinfo",$data);
			 */
			$sql = "insert into tb_applyinfo(userEmail,userAge,userGender,applyplan,applytime) values('" . $userEmail . "','" . $age . "','" . $gender . "','" . $plan . "',now())";
			// echo $sql;
			mysqli_query ( $conn, $sql );
			$insertRet = mysqli_errno ( $conn );
			if ($insertRet == '0') {
				echo 0;
				exit ();
			} else {
				echo 3; // 提交失败
				exit ();
			}
		} else if ($act == "addressinfo") {
			$conn = connect ( DB_HOST, DB_USER, DB_PWD, DB_DBNAME );
			$recvname = mysqli_escape_string ( $conn, $_POST ['recvname'] );
			$address = mysqli_escape_string ( $conn, $_POST ['address'] );
			$zipcode = mysqli_escape_string ( $conn, $_POST ['zipcode'] );
			$phoneno = mysqli_escape_string ( $conn, $_POST ['phoneno'] );
			if (! checkPhoneNO ( $phoneno )) {
				echo 2; // 手机号不符合格式
				exit ();
			}
			if (tableexist ( $conn, 'tb_address', "userEmail='" . $userEmail . "'" )) {
				echo 3; // 已提交过信息
				exit ();
			}
			
			// 将用户数据插入tb_applyinfo中
			/*
			 * $data=array("userEmail"=>$userEmail,"userAge"=>$age,"userGender"=>$gender,"applyplan"=>$plan,"applytime"=>"now()");
			 * $insertRet=insert($conn,"tb_applyinfo",$data);
			 */
			$sql = "insert into tb_address(userEmail,name,address,zipCode,phoneNo) values('" . $userEmail . "','" . $recvname . "','" . $address . "','" . $zipcode . "','" . $phoneno . "')";
			mysqli_query ( $conn, $sql );
			$insertRet = mysqli_errno ( $conn );
			if ($insertRet == '0') {
				echo 0;
				exit ();
			} else {
				echo 4; // 提交失败
				exit ();
			}
		}
	}
}
?>