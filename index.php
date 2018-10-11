<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 16/04/2018
 * Time: 22:13
 */

require "controller/HomeController.php";
$page = isset($_GET['page']) ? $_GET['page'] : "index";


$ctrl = new HomeController();


switch ($page){
        case "index" :
        $ctrl->Index();
        break;
    case "login" :
        $ctrl->Login();
        break;
    case "register" :
        $ctrl->Register();
        break;
    case "panel" :
        $ctrl->Panel();
        break;
}
