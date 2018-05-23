<?php 
	
	function sum (){
	static $num = 2;
	$num*=2;
	echo $num.'<br />';	
	}
sum();
sum();
sum();
