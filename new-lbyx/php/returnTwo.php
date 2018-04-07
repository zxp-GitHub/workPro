<?php 
//header("Content-type:text/html;charset=utf-8");
//$returnPic ='$_GET[returnPic]'
//echo $returnPic; 
header( "Content-type: image/jpeg");
$PSize = filesize('$_GET[returnPic]');
$picturedata = fread(fopen('$_GET[returnPic]', "r"), $PSize);
echo $picturedata;
?>  