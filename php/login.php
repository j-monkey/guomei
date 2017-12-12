<?php
header('content-type:text/html;charset=utf-8');
$link =mysqli_connect('localhost','root','jiangyao','book')or die('连接数据库失败'.mysqli_error($link));
$name=$_POST['username'];
$password=$_POST['password'];

$query="select * from user where name='$name'&&password='$password'";
$result=mysqli_query($link, $query);
//print_r($result);
if(mysqli_fetch_array($result)){
	echo true;
}else{
	echo false;
}
?>