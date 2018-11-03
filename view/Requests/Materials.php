<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 03/11/2018
 * Time: 00:08
 */

$url = 'http://localhost:8080/api/materials';
$json = file_get_contents($url);

$obj = json_decode($json);
$data = json_decode($json, true);

//var_dump($data);




?>

