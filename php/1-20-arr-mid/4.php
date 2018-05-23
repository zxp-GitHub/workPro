<?php
$arr = [1,2,3,4,5,6,7,8,9];

// echo count($arr);

//得到循环次数
$sum = 0;
$num = count($arr);//9

for ($i=0; $i < $num ; $i++) { 
	// echo $arr[$i].'<br />';
	$sum += $arr[$i];
	// $sum = $sum + $arr[$i];

}

echo $sum;