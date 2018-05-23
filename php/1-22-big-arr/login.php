<?php
// var_dump($_GET);
// var_dump($_POST);
// var_dump($_REQUEST);
//不论HTML传递的方式是get还是post都可以获取，也不在url地址栏显示信息

$username = $_GET['username'];
$password = $_GET['password'];

$user = '张秀';
$pass = '123';

if ($username ==$user&&$password == $pass) {
	echo '登陆成功';
} else {
	echo '登录失败';
}

