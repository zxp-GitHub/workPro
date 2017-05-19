<?php
//echo 'username:'. $_GET['username']. "<br />";
//echo 'password:' . $_GET['password'] . "<br />" ;

$conn=mysqli_connect("localhost","root","qq359784","lbyx");

//if (mysqli_connect_errno())
//{
//	echo "连接失败: " . mysqli_connect_error();
//}
//// 检测连接
//if (!$conn) {
//  die("Connection failed: " . mysqli_connect_error());
//}
// Check connection
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

$sql = "INSERT INTO t_user (name, password)
VALUES ('" . $_GET['username'] . " ','" .$_GET['password'] . "')";

if (mysqli_query($conn, $sql)) {
     $result = mysqli_query($conn,"SELECT id FROM t_user where name='$_GET[username]' and password='$_GET[password]'");
 if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc())//将result结果集中查询结果取出一条
		{
			echo $row['id'];
			echo "<br />";
//			echo "var data = 1";
		}
}else{
	echo "no";
//	        echo "var data = 0";
}
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>