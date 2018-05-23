<?php

//echo mt_rand(1,6);
$shaizi = mt_rand(1,7);

echo $shaizi.'<br />';

switch ($shaizi) {
	case 1:
	case 2:
		echo '拖地<br />';
		echo '洗衣服';
		break;
	case 3:
		echo '出门散步<br />';
		echo '给花浇水';
		break;
	case 4:
		echo '做美食<br />';
		break;
	case 5:
	case 6:
		echo '休息';
		break;
	default:
		echo '看情况安排';
		break;
}