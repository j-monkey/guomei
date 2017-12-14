<?php
header('content-type:text/html;charset=utf-8');
$link =mysqli_connect('localhost','root','jiangyao','book')or die('连接数据库失败'.mysqli_error($link));
$sid=$_POST['sid'];
$query="select * from information where sid='$sid";
$result=mysqli_query($link, $query);
print_r($result);
if(mysqli_fetch_array($result)){
	echo true;
}else{
	echo false;
}
?>