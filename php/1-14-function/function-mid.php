<?php 

	function say ($name = '张三' , $age = 18 , $sex = '保密'){//形参
		echo '姓名：'.$name.'<br />';
		echo '姓名：'.$age.'<br />';
		echo '姓名：'.$sex.'<br />';

		return '这是我的自我介绍';
	}

echo say('李四');//实参