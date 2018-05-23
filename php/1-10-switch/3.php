<?php

//echo mt_rand(1,6);
$total = 99;

if ($total<60) {
	echo '不及格';
} else if ($total<=70) {
	echo '及格';
} else if ($total<=80) {
	echo '良好';
} else if ($total<=90) {
	echo '优秀';
} else {
	echo '很棒';
}

