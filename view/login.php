<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 17/04/2018
 * Time: 00:17
 */
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- PAGE settings -->
    <link rel="icon" href="assets/app/icon.png">
    <title>App EcoMoney</title>
    <meta name="description" content="Free Bootstrap 4 Pingendo Aquamarine template made for app and softwares.">
    <meta name="keywords" content="Pingendo app aquamarine free template bootstrap 4">
    <!-- CSS dependencies -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="css/aquamarine.css">
    <!-- Script: Make my navbar transparent when the document is scrolled to top -->
    <script src="js/navbar-ontop.js"></script>
    <!-- Script: Animated entrance -->
    <script src="js/animate-in.js"></script>
</head>

<body>
<!-- Classe Navbar -->
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <div class="container-fluid"> </div>
</nav>
<nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="?page=index">
            <i class="fa d-inline fa-lg fa-envira"></i>
            <b class="logo">EcoMoney</b>
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-bookmark"></i> Marcações</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-cog"></i> Configurações</a>
                </li>
            </ul>
            <a class="btn btn-secondary m-2" href="?page=register">
                <i class="fa fa-user fa-fw"></i>Cadastre-se</a>
        </div>
    </div>
</nav>
<!-- Cover -->
<div class="pt-5 bg-primary" style="background-image: url('assets/ecomoney.png');">
    <div class="container mt-5 pt-5">
        <div class="row section-dark">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-3"> </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h1 class="mb-4 text-center">Faça o Login</h1>
                            <form action="https://formspree.io/YOUREMAILHERE">
                                <div class="form-group">
                                    <label>E-mail ou Usuário</label>
                                    <input type="email" class="form-control" placeholder="Digite seu e-mail ou CPF"> </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Digite sua senha">
                                    <label></label>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">Mantenha-me conectado neste navegador</label>
                                    </div>
                                </div>
                                <a class="btn btn-secondary btn-block" href="?page=panel">Entrar</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12 py-4">
                <p> </p>
            </div>
        </div>
    </div>
</div>
<!-- Article style section -->
<!-- Features -->
<!-- Features -->
<!-- Carousel reviews -->
<!-- Call to action -->
<div class="bg-primary" id="download">
    <div class="container">
        <div class="row py-3">
            <div class="col-md-6">
                <img class="img-fluid d-block my-4 animate-in-left" src="assets/app/iphone_isometric_light.png"> </div>
            <div class="col-md-6 align-self-center text-center text-md-left">
                <h1>
                    <b>Baixar aplicativo agora</b>
                </h1>
                <p class="lead text-dark">Baixe o ecomoney e começe a transformar o meio ambiente!</p>
                <div class="row mt-4">
                    <div class="col-6 col-md-12">
                        <a href="#">
                            <img class="center-block img-fluid d-block shadowed" src="assets/app/download_android.png"> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer -->
<div class="pt-5 bg-dark">
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <p class="lead">Receba Novidades</p>
                <form class="form-inline">
                    <div class="form-group">
                        <input type="email" class="form-control my-1 mr-1" placeholder="Cadastre seu e-mail"> </div>
                    <button type="submit" class="btn my-1 btn-outline-primary">Inscrever-se</button>
                </form>
            </div>
            <div class="col-4 col-md-1 align-self-center my-3">
                <a href="https://www.facebook.com" target="blank">
                    <i class="fa fa-fw fa-facebook fa-3x text-white"></i>
                </a>
            </div>
            <div class="col-4 col-md-1 align-self-center my-3">
                <a href="https://twitter.com" target="blank">
                    <i class="fa fa-fw fa-twitter fa-3x text-white"></i>
                </a>
            </div>
            <div class="col-4 col-md-1 align-self-center my-3">
                <a href="https://www.instagram.com" target="blank">
                    <i class="fa fa-fw fa-instagram fa-3x text-white"></i>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 my-3 text-center">
                <p class="text-muted">© Copyright 2018 EcoMoney - Todos os direitos reservados.</p>
            </div>
        </div>
    </div>
</div>
<!-- JavaScript dependencies -->
<script src="http://code.jquery.com/jquery-3.2.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- Script: Smooth scrolling between anchors in the same page -->
<script src="js/smooth-scroll.js"></script>

</body>

</html>