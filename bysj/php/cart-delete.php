<?php
//连接数据库
$conn=mysqli_connect("localhost","root","qq359784","lbyx");
mysqli_query($conn , "set names utf8");
//判定连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
//对数据库进行删除
    mysqli_query($conn,"DELETE FROM t_cart WHERE userID='$_GET[userID]' AND goodID='$_GET[goodID]'");
	mysqli_close($conn);
?>
<!--SELECT t_user.`name`,t_goods.goodname,t_goods.price, t_cart.num,t_cart.createtime FROM t_user,t_goods,`t_cart` where t_user.id=1 and t_cart.UID=t_user.ID and t_cart.GID=t_goods.ID ORDER BY createtime ASC-->