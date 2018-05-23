<?php 

	function sum(int $num1,int  $num2){
		echo gettype($num1);
		echo gettype($num2);
		return $num1 + $num2;
	}
var_dump(sum('1','2'));