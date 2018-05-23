<?php
//二维数组定义
$arr = [
	'php' =>[
		'html',
		'js' =>[
			'dom',
			'bom' =>[
				'window'
			],
			'ecma'
		],
		'css'
	],
	'java',
	'javascript',
	'c#'
];

var_dump($arr['php']);
var_dump($arr['php']['js']['bom'][0]);
echo $arr['php'][1];
echo '<br />';
echo $arr['php']['js']['bom'][0];