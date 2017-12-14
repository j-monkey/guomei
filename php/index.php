<?php
header('content-type:text/html;charset=utf-8');
$link =mysqli_connect('localhost','root','jiangyao','book')or die('连接数据库失败'.mysqli_error($link));
$sid=$_POST['sid'];
if($sid){
	$query="select *from information where sid='$sid'";
	$result=mysqli_query($link,$query);
			$arr=array();
			
			for($i=0;$i<mysqli_num_rows($result);$i++){
				$arr[$i]=mysqli_fetch_array($result,MYSQLI_ASSOC);
				
			}
			echo json_encode($arr);
}else{

	$img=isset($_REQUEST['url'])?$_REQUEST['url']:false;	
			$query="select *from information";
			$result=mysqli_query($link,$query);
			$arr=array();
			
			for($i=0;$i<mysqli_num_rows($result);$i++){
				$arr[$i]=mysqli_fetch_array($result,MYSQLI_ASSOC);
				
			}
			echo json_encode($arr);
}




?>