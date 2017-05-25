<?php
//连接数据库
$conn=mysqli_connect("localhost","root","qq359784","lbyx");
mysqli_query($conn , "set names utf8");
//判定连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
//对数据库进行查询
$sql = "SELECT t_cart.*,t_goods.* FROM t_cart,t_goods where t_cart.userID='$_GET[userID]' and t_cart.goodID=t_goods.goodID";
//判定是否查询结果是否存在，存在几条
//$goodnum = "t_cart.goodnum";
//$goodname = "t_goods.goodname";
//$goodsrc = "t_goods.goodnum";
//$goodprice = "t_goods.goodprice";s
$result = $conn->query($sql);
//存在输出1，不存在输出0
if ($result->num_rows > 0) {
	$e = array();
	  while($row = $result->fetch_assoc()) {
		 $e[] = array("goodnumber"=>$row["goodnumber"],"goodname"=>$row["goodname"],"goodsrc"=>$row["goodsrc"],"goodprice"=>$row["goodprice"]);
	  }
	  echo json_encode($e);
} else {
	echo "0";
}
//推出数据库操作
mysqli_close($conn);
?>

