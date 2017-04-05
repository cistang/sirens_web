<?php


/**
* 判断数据表中是否存在符合条件的数据项
* @date: 2016年8月9日 下午7:12:03
* @author: jonhn
* @param: sqllink $conn
* @param: string $table
* @param: string $where
* @return:
*/
function tableexist($conn,$table,$where){
	$sql = mysqli_query($conn,"select * from ".$table." where ".$where);
	//echo "select * from ".$table." where ".$where;
	$result = mysqli_fetch_array($sql);
	if ($result) {
		return true;
	} else {
		return false;
	}
}


/**
* 链接数据库
* @date: 2016年8月7日 下午9:39:18
* @author: jonhn
* @param: string $host
* @param: string $user
* @param: string $password
* @param: string $dbname
* @return:
*/
function connect($host,$user,$password,$dbname){
	$link= mysqli_connect($host, $user, $password, $dbname) or die("数据库连接失败Error:".mysqli_errno().":".mysqli_error());
	mysqli_set_charset($link,DB_CHARSET);
	return $link;
}


/**
 * 完成记录插入的操作
 * @param string $table
 * @param array $array
 * @return number
 */
function insert($conn,$table,$array){
	/*$keys=join(",",array_keys($array));
	$vals=join(",",array_values($array));*/
	$keys="";
	$vals="";
	$i=0;
	foreach ($array as $key=>$value){
		$i++;
		if($i==1){
			if($value=="''"){
				continue;
			}else{
				$keys=$keys.$key;
				$vals=$vals.$value;
			}
		}else{
			if($value=="''"){
				continue;
			}else{
				$keys=$keys.",".$key;
				$vals=$vals.",".$value;
			}
		}
	}
	$sql="insert into {$table}($keys) values({$vals})";
  	mysqli_set_charset($conn,'utf8');	
//	$ret=mysqli_query($conn, $sql) or die("插入数据失败Error:".mysqli_errno($conn).":".mysqli_error($conn));
	//echo $sql;
	mysqli_query($conn, $sql); 
	$ret=mysqli_errno($conn);
	//return mysqli_insert_id($conn);
	return $ret;
}


/**
 * 记录的更新操作
 * @param string $table
 * @param array $array
 * @param string $where
 * @return number
 */
function update($conn,$table,$array,$where=null){
    $str="";
	foreach($array as $key=>$val){
		if($val==""){
			continue;
		}
		if($str==null){
			$sep="";
		}else{
			$sep=",";
		}
		$str.=$sep.$key."='".$val."'";
	}
	$sql="update {$table} set {$str} ".($where==null?null:" where ".$where);
	mysqli_query($conn,"set names 'utf8'");
	$result=mysqli_query($conn,$sql);
	$err=mysqli_error($conn);
	$errno=mysqli_errno($conn);
	$ret=array('errorno'=>$errno,'error'=>$err);
	//var_dump($result);
	//var_dump(mysql_affected_rows());exit;
	/*
	 * 根据改变的行数来判断update操作成功与否，会有问题
	 * 如，用户更新的密码与原来的密码一样，那么改变的行数为0，会返回update failed
	 */
	if($result){
		return mysqli_affected_rows($conn);
	}else{
		return false;
	}
	//return $ret;
}
