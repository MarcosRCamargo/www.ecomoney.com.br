<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 17/04/2018
 * Time: 00:44
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
<!-- Navbar -->
<nav class="navbar-expand-md navbar-dark fixed-top navbar bg-primary">
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
                <li class="nav-item text-white">
                    <a class="nav-link" href="#download">
                        <i class="fa fa-download"></i> Download</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-cog"></i> Configurações</a>
                </li>
            </ul>

            <a class="btn btn-secondary m-2" href="?page=login">
                <i class="fa fa-fw fa-user-circle-o"></i>Entrar</a>
        </div>
    </div>
</nav>
<!-- Cover -->
<div class="pt-5 bg-primary" style="background-image: url('assets/ecomoney.png');">
    <div class="container mt-5 pt-5">
        <div class="row section-dark">
            <div class="col-md-6 my-5 text-lg-left text-center align-self-center text-white">
                <h1 class="display-1">EcoMoney</h1>
                <p class="lead">Ecologicamente inteligente</p>
                <div class="row mt-5">
                    <div class="col-6 col-lg-5">
                        <a href="#">
                            <img class="center-block img-fluid d-block shadowed rounded" src="assets/app/download_android.png"> </a>
                    </div>
                    <div class="col-6 col-lg-5">
                        <a href="#">
                            <img class="center-block img-fluid d-block shadowed" src="assets/app/download_ios.png"> </a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img class="img-fluid d-block mx-auto" src="assets/app/iphone_cover_light.png" width="400"> </div>
        </div>
    </div>
</div>
<!-- Article style section -->
<!-- Features -->
<div class="py-5" id="features">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <h2 class="pb-4">Funcionalidades pra ajudar você e o meio ambiente</h2>
            </div>
        </div>
        <div class="row">
            <div class="align-self-center text-md-right text-center col-lg-4 col-md-6">
                <h4 class="text-primary">Acumule pontos&nbsp;</h4>
                <p class="mb-5">Para cada quilo de material entregue em um ponto de coleta você recebe uma quantidade de EcoPoints que podem ser resgatados ou trocados por produtos nos estabelecimentos parceitos.&nbsp;</p>
                <h4 class="text-primary">Pontos de coleta fácil</h4>
                <p class="mb-5">Encontre um ponto de coleta facilmente por meio do aplicativo, alem de mostrar qual estabelecimento é parceito de da a rota e abre o GPS e te guia até o ponto de coleta mais proximo.&nbsp;</p>
                <h4 class="text-primary">Ajude-nos a Crescer</h4>
                <p class="mb-5">O EcoMoney veio para ajudar você, o meio ambiente, e uma galera! Então caso queira contribuir com o aplicativo assinale a opção de ajudar a equipe Eco no menu de configurações.</p>
            </div>
            <div class="my-3 col-md-4 d-none d-lg-block">
                <img class="img-fluid d-block mx-auto animate-in-down" src="assets/app/iphone_features_light.png" width="300"> </div>
            <div class="align-self-center text-md-left text-center col-lg-4 col-md-6">
                <h4 class="text-primary">Faça várias boas ações!</h4>
                <p class="mb-5">Além de contribuir com o meio ambiente você ainda pode ajudar quem precisa de ajuda. Por meio do aplicativo você pode escolher uma instituição de caridade e doar seu saudo!</p>
                <h4 class="text-primary">Resgate em conta virtual</h4>
                <p class="mb-5">Após acumular um saldo de EcoPoints você poderá trocalo em algum estabelecimento parceiro ou solicitar o resgate do seu saldo por meio do PagSeguro ou PayPal</p>
                <h4 class="text-primary">Conteúdo EcoMoney</h4>
                <p class="mb-5">Uma guia voltada para você compreender como funciona o processo de reciclagem e onde sua ação impacta na cidade onde você mora e ao redor do Brasil.&nbsp;</p>
            </div>
        </div>
    </div>
</div>
<!-- Features -->
<!-- Carousel reviews -->
<div class="py-5 text-white bg-secondary" style="background-image: url(&quot;assets/Background.png&quot;);background-size:fit;background-repeat:no-repeat;">
    <div class="container">
        <div class="row text-white">
            <div class="col-md-6 section-dark border border-primary">
                <div class="row border border-primary">
                    <div class="col-md-9">
                        <p class="lead">
                            <i>"Ser parceiro da EcoMoney foi um passo muito importante para nós!</i>
                            <br>
                            <i>Alem de atrair clientes poder contribuir com o meio ambiente de maneira&nbsp;</i>
                            <br>
                            <i>efetiva foi mais do que satisfatório"</i>&nbsp;.
                            <br>
                            <br>- Marcos &nbsp;Camargo </p>
                        <div class="col-md-12"> </div>
                    </div>
                    <div class="col-md-3">
                        <div class="col-md-12 p-0">
                            <img class="img-fluid d-block rounded-circle ml-auto py-5" src="assets/perfil.jpg"> </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9">
                        <p class="lead">
                            <i>"Ser parceiro da EcoMoney foi um passo muito importante para nós!</i>
                            <br>
                            <i>Alem de atrair clientes poder contribuir com o meio ambiente de maneira&nbsp;</i>
                            <br>
                            <i>efetiva foi mais do que satisfatório"</i>&nbsp;.
                            <br>
                            <br>- Marcos &nbsp;Camargo </p>
                        <div class="col-md-12"> </div>
                    </div>
                    <div class="col-md-3">
                        <div class="col-md-12 p-0">
                            <img class="img-fluid d-block rounded-circle ml-auto py-5" src="assets/perfil.jpg"> </div>
                    </div>
                </div>
                <div class="row"> </div>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-12"> </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-12"> </div>
                    </div>
                </div>
                <div class="row"> </div>
            </div>
        </div>
        <div class="row text-white">
            <div class="col-md-12">
                <div class="row"> </div>
            </div>
        </div>
    </div>
</div>
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
                            <img class="center-block img-fluid d-block shadowed " src="assets/app/download_android.png"> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
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
<!-- Call to action -->
<!-- Footer -->
<!-- JavaScript dependencies -->
<script src="http://code.jquery.com/jquery-3.2.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- Script: Smooth scrolling between anchors in the same page -->
<script src="js/smooth-scroll.js"></script>
</body>

</html>