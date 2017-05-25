<?php
echo 'username:'. $_GET['username']. "<br />";
echo 'password:' . $_GET['password'] . "<br />" ;

$conn=mysqli_connect("localhost","root","qq359784","ppsql");

if (mysqli_connect_errno())
{
	echo "连接失败: " . mysqli_connect_error();
}
// 检测连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO pptable (firstname, lastname, email)
VALUES ('" . $_GET['username'] . " ','" .$_GET['password'] . "', 'john@example.com')";

if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>