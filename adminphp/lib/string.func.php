<?php
/**
 * 生成唯一字符串
 * @return string
 */
function getUniString(){
	return md5(uniqid(microtime(true),true));
}

/**
* 在字符串的前后加上单引号 str-> 'str'
* @date: 2016年8月9日 下午9:03:32
* @author: jonhn
* @param: string $str
* @return:
*/
function charlizeString($str){
	$ret="'".$str."'";
	return $ret;
}

function checkPhoneNO($ph){
	if (preg_match ( "/^[0-9]{11}$/", $ph )) {
		return true;
	}else{
		return false;
	}
}

function checkEmailAddress($email){
	$pattern = "/^([0-9A-Za-z\\-_\\.]+)@([0-9a-z]+\\.[a-z]{2,3}(\\.[a-z]{2})?)$/i";
	if(preg_match($pattern,$email)){
		return true;
	}else{
		return false;
	}
}

/**
 * 生成验证码
 * @param int $type
 * @param int $length
 * @return string
 */
function buildRandomString($type=1,$length=4){
	if ($type == 1) {
		$chars = join ( "", range ( 0, 9 ) );
	} elseif ($type == 2) {
		$chars = join ( "", array_merge ( range ( "a", "z" ), range ( "A", "Z" ) ) );
	} elseif ($type == 3) {
		$chars = join ( "", array_merge ( range ( "a", "z" ), range ( "A", "Z" ), range ( 0, 9 ) ) );
	}
	if ($length > strlen ( $chars )) {
		exit ( "字符串长度不够" );
	}
	$chars = str_shuffle ( $chars );
	return substr ( $chars, 0, $length );
}