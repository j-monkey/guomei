<?php
header('content-type:text/html;setchart=utf-8');
	$link =	mysqli_connect('localhost','root','jiangyao')or die('连接数据库失败'.mysqli_error($link));
	mysqli_select_db($link, book)or die('连接数据库失败'.mysql_error());
	
	//接收来自表单的数据
	$name=$_POST['username'];
	$password=md5($_POST['password']);
	$flag="select * from user where name='$name'";
	$expression=mysqli_query($link, $flag);

	//判断用户名是否已经注册
//print_r(mysqli_fetch_array($expression));
	if(mysqli_fetch_array($expression)){
		echo true;	//1就是存在
	}else{
		echo false;
		$query="insert into user values(null,'$password','111111@qq.com',12,'$name')";
		$result =mysqli_query($link, $query);
	
	}
	
	
//	print_r(mysqli_fetch_array($result,MYSQLI_ASSOC));

	mysqli_close($link);
	
?>