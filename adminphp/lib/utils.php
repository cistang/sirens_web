<?php
//echo getMilli();

/*
 * 获取当前时间和指定的时间戳之间相差的毫秒数
 * 指定的时间戳为 Unix 纪元（0:00:00 January 1, 1970 GMT）
 */
function getMilli() {
	//$enddate=date("Y-m-d h:i:s");
	//$result=floor((strtotime($enddate)-strtotime($startdate)));
	//echo microtime();
	$time=explode(" ", microtime());
	$secs=$time[1]; //获取Unix至今的秒数
	$mil=$time[0]*1000;
	$millis=explode(".", $mil);
	$mil=$millis[0]; //获取unix纪元至今的毫秒数
	$ret=$secs.$mil;
	$ret=str_pad($ret,15,'0',STR_PAD_LEFT); //补齐15位，左补0
	return $ret;
	//echo $result."seconds";
}