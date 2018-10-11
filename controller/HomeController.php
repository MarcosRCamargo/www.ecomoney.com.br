<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 17/04/2018
 * Time: 00:37
 */
require "model/LoggedUser.php";

class HomeController
{
    public function Index()
    {
        include "view/Index.php";
    }
    public function Login()
    {
        include "view/Login.php";
    }
    public function Register()
    {
        include "view/Register.php";
    }
    public function Panel()
    {
        $model = new LoggedUser();
        $user = $model->UserLogged();
        include "view/Panel.php";
    }
}