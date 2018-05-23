<?php
$arr = ['a','b','b','e','f'];

// while (list($key,$val) = each($arr)) {
// 	echo $key . '-----' . $val .'<br />';
// }

list($key,$val) = each($arr);

echo $key,$val;

/*
1.each:每次匹配一个
2.list:全部匹配
3.while：循环（注意true，false的死循环问题）


 */