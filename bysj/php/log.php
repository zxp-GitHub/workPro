<?php
//浏览器地址栏获取的信息，涉及到http交互过程
//echo 'username:'. $_GET['username']. "<br />";
//echo 'password:' . $_GET['password'] . "<br />" ;
//连接数据库
$conn=mysqli_connect("localhost","root","qq359784","lbyx");
//mysqli_query($conn , "set names utf8");
mysql_query("set names utf8");//设置编码格式
//判断数据库连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
//执行查询
 $result = mysqli_query($conn,"SELECT * FROM t_user where name='" . $_GET['username'] . "' and password='" . $_GET['password'] . "'");
 if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc())//将result结果集中查询结果取出一条
		{
			echo $row['name'] . " " . $row['password']. "<br />";
			echo "0";
//			echo "var data = 1";
		}
}else{
	echo "1";
//	        echo "var data = 0";
}
//$sql="SELECT * FROM t_user where name='$_GET[username]' and password='$_GET[password]'";
 //执行上面的sql语句并将结果集赋给result。
//$result = $conn->query($sql);	
//// 设置编码，防止中文乱码
//
// //判断结果集的记录数是否大于0
//if ($result->num_rows > 0) {
//  // 输出数据
//  while($row = $result->fetch_assoc()) {
//      echo "-id: " . $row["ID"]. " - Name: " . $row["name"]. " -pass:" . $row["password"]. "<br>";
//  }
//} else {
//  echo "0 结果";
//}
$conn->close();
?>