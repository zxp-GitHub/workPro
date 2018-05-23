<?php
$arr = ['a','b','c','d'];

// var_dump($arr);
//获取数组中的值
// echo $arr[1];

//添加一个元素
$arr[4] = '这是我新添加的';
//删除一个元素
unset($arr[2]);
//修改一个元素
$arr[1] = 'php';
//查看下标及对应元素
var_dump($arr);