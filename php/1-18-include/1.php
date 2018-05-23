<?php
   // include('2.php');
   // add();
   // require('2.php');
   // select();
   
   include('mysql/2.php');
   //include，require文件包含是相同的，但是包含出错最好用include;
   add();

   // include('3.php');
   // add();
   // require('3.php');
   // select();
   echo '我是后续代码';//注意：include抱错，可以执行后续代码，require不行;