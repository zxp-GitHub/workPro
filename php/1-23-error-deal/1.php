<?php
@var_dump($name);
echo '$name后续代码<br />';

@include('2.php');
echo 'include后续代码';

@add();
echo '我是add方法下面的代码';


//nitice waring后续代码会继续执行
//fatal error后续代码不会继续执行

//@ 会屏蔽nitice waring的警告，但是屏蔽不了fatal error的，若是都想屏蔽需要修改wamp中的php.ini日志（日志一定要备份！！！）