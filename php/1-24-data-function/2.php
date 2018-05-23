<?php
date_default_timezone_set('PRC');
//设置时区的两种方式？
//1.设置时区：date_default_timezone_set函数//PRC
//2.设置时区(修改配置文件)：修改需要去php.ini查(ctrl+f)date.timezone-重启服务！！！

//是date_default_timezone_set不是date_default_timezone_get
//若是不用上述方法，也可修改日志：PRC(php文档中可以查到)是北京时区的，UTC是格林威治时区，修改需要去php.ini查(ctrl+f)date.timezone-重启服务！！！

$time = time();

echo date('Y-m-d H:i:s');