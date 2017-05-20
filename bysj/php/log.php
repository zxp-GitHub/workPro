<?php
//连接数据库
$conn=mysqli_connect("localhost","root","qq359784","lbyx");
//判定连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
//对数据库进行查询
$sql = "select name,password FROM t_user where name='$_GET[username]' and password='$_GET[password]'";
//判定是否查询结果是否存在，存在几条
$result = $conn->query($sql);
//存在输出1，不存在输出0
if ($result->num_rows > 0) {
        echo "1";
} else {
   		echo "0";
}
//推出数据库操作
mysqli_close($conn);
?>