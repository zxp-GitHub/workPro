<?php
//连接数据库
$conn=mysqli_connect("localhost","root","qq359784","lbyx");
mysqli_query($conn , "set names utf8");
//判定连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
//对数据库进行查询
mysqli_query($conn,"UPDATE t_cart SET goodready='$_GET[goodReady]' WHERE userID='$_GET[userID]' and goodID='$_GET[goodID]'");
//$sql = "select name FROM t_user where userID='$_GET[userID]' and goodID='$_GET[goodID]'";
////判定是否查询结果是否存在，存在几条
//$result = $conn->query($sql);
////存在输出1，不存在输出0
//if ($result->num_rows > 0) {
//	echo "0k";
//      $result = mysqli_query($conn,"UPDATE t_user SET username='$_GET[clientName]', useraddress='$_GET[clientAddress]', userphone='$_GET[clientPhone]' WHERE userID='$_GET[userID]'");
//} else {
// 		 echo "0";
//}
//推出数据库操作
mysqli_close($conn);
?>