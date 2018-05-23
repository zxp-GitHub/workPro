<?php
//二维数组定义
$arr = [
	'php' =>[
		'html',
		'js',
		'css'
	],
	'java',
	'javascript',
	'c#'
];

// var_dump($arr['php']);
// echo $arr['php'][1];

$arr[5] = '语言'；
$arr[] = '你看我的下标变化';
var_dump($arr);