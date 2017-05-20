<?php
//连接数据库
$conn=mysqli_connect("localhost","root","qq359784","lbyx");
//设置数据库编码格式，否则前端页面会显示为问好
mysqli_query($conn , "set names utf8");
//判定连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
//mysql_query("SET NAMES utf8"); 
//对数据库进行查询
$sql = "select * FROM t_goods where goodnum=" . $_GET["goodnum"]."";
//判定是否查询结果是否存在，存在几条
$result = $conn->query($sql);
//存在输出1，不存在输出0
if ($result->num_rows > 0) {
	$a=array();
	  while($row = $result->fetch_assoc()) {
//	  	array_push($a,"". $row["goodname"]."");
//		var_dump(json_encode($a)) ;
          echo "". $row["goodname"]."";
		  echo "". $row["goodsrc"]."";
//			echo $a;
	  }
} else {
    echo "0";
}
//$arrlength=count($a);
//for($x=0;$x<$arrlength;$x++)
//{
//  echo $a[$x];
//  echo "<br>";
//}
//推出数据库操作
mysqli_close($conn);
?>