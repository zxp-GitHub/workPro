<?php
//连接数据库
$conn=mysqli_connect("localhost","root","qq359784","lbyx");
mysqli_query($conn , "set names utf8");
//判定连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
//对数据库进行查询
$sql = "select * FROM t_cart where userID='$_GET[userID]' and goodID='$_GET[goodID]'";
//判定是否查询结果是否存在，存在几条
$result = $conn->query($sql);
//存在输出1，不存在输出0

if ($result->num_rows > 0) {
	if(".$_GET[goodnum]."== 0){
	$result =mysqli_query($conn,"DELETE FROM t_cart WHERE userID='$_GET[userID]' AND goodID='$_GET[goodID]'");
	}
   $result = mysqli_query($conn,"UPDATE t_cart SET goodnumber='$_GET[goodnum]' WHERE userID='$_GET[userID]' AND goodID='$_GET[goodID]'");
} else {
   $result = mysqli_query($conn,"INSERT INTO t_cart (userID, goodID,goodnumber) VALUES ('" . $_GET['userID'] . " ','" . $_GET['goodID'] . "','" . $_GET['goodnum'] . "')");
}

//推出数据库操作
mysqli_close($conn);
?>
<!--SELECT t_user.`name`,t_goods.goodname,t_goods.price, t_cart.num,t_cart.createtime FROM t_user,t_goods,`t_cart` where t_user.id=1 and t_cart.UID=t_user.ID and t_cart.GID=t_goods.ID ORDER BY createtime ASC-->