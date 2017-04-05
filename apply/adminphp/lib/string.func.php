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