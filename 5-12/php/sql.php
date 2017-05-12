<?php
$servername = "localhost";
$username = "root";
$password = "qq359784";
$dbname = "lbyx";
 
// 创建链接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检查链接
if (!$conn) {
    die("连接失败: " . mysqli_connect_error());
}
//$sql = "INSERT INTO newlbyx (id, num)
//VALUES ('2','5');";
//$sql = "INSERT INTO newlbyx (id, num)
//VALUES ('8','5');";


mysqli_query($conn,"UPDATE newlbyx SET num=16
WHERE id='2'");
//if (mysqli_multi_query($conn, $sql)) {
//  echo "新记录插入成功";
//} else {
//  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
//}
 
mysqli_close($conn);
?>