<?php

for ($i=0; $i < 5; $i++) { 
	if ($i == 3) {
		continue;
	}
	echo $i.'<br />';
}

// 0
// 1
// 2
// 4