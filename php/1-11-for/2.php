<?php
	echo '<table width="800" height="200" border="1">';
		for ($i=1; $i <= 9; $i++) { 
			echo '<tr>';
				for ($j=1; $j <=9; $j++) { 
					if($j <= $i){
						echo '<td>'.$j.'*'.$i.'='.$i*$j.'</td>';
					}
					
				}
			echo '<tr />';
		}
	echo '</table?';
// 0
// 1
// 
// 4