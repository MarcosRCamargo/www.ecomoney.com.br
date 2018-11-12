<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 17/04/2018
 * Time: 00:58
 */
include 'GestorApp/Materials.php';
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- PAGE settings -->
    <link rel="icon" href="/assets/icon.png">
    <title>EcoMoney</title>
    <meta name="description" content="Free Bootstrap 4 Pingendo Aquamarine template made for app and softwares.">
    <meta name="keywords" content="Pingendo app aquamarine free template bootstrap 4">
    <!-- CSS dependencies -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="css/aquamarine.css">
    <!-- Script: Make my navbar transparent when the document is scrolled to top -->
    <script src="/js/navbar-ontop.js"></script>
    <!-- Script: Animated entrance -->
    <script src="/js/animate-in.js"></script>
    <style>
        /* Set the size of the div element that contains the map */
        #map {
            height: 400px;  /* The height is 400 pixels */
            width: 100%;  /* The width is the width of the web page */
        }
    </style>
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
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-bookmark"></i> Marcações</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-cog"></i> Configurações</a>
                </li>
            </ul>
            <a class="btn btn-secondary m-2" href="?page=index">
                <i class="fa fa-user fa-fw"></i>Sair</a>
        </div>
    </div>
</nav>
<div>
    <div class="container py-3"> </div>
</div>
<!-- Cover -->
<div class="py-5" style="background-image: url('assets/ecomoney.png');">
    <div class="container-fluid">
        <div class="row">
            <div class="col-4 col-xs-4 navbar-ontop">
                <ul class="nav nav-pills flex-column">
                    <div class="row">
                        <li class="nav-item col">
                            <div class="card bg-secondary">
                                <img class="rounded-circle mx-auto py-1" src="assets/perfil.jpg" alt="Card image" width="30%">
                                <div class="card-body">
                                    <h4 class="card-title">Seja bem Vindo <?= $user ?></h4>
                                    <p class="card-text">O EcoMoney &nbsp;esta aqui pra contribuir com você e o meio
                                        <br>ambiente.</p>
                                </div>
                            </div>
                        </li>
                    </div>

                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tabpainel">
                            <i class="fa fa-fw fa-home"></i>Início</a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tadpessoaldata">
                            <i class="fa fa-user fa-fw"></i>Meu Perfil</a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tabmessage">
                            <i class="fa fa-fw fa-envelope-o"></i>Mensagens
                            <span class="badge badge-primary badge-pill">14</span>
                        </a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tabhistory">
                            <i class="fa fa-fw fa-history"></i>Histórico&nbsp;
                            <span class="badge badge-pill badge-warning">2</span>
                        </a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tabadress">
                            <i class="fa fa-fw fa-map-marker"></i>Endereço
                            <br> </a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tabvirtualacount">
                            <i class="fa fa-fw fa-paypal"></i>Conta Virtual</a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tabnotices">
                           <i class="fa fa-fw fa-youtube-square"></i>Notícias</a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-target="#tabmaps" data-toggle="pill">
                            <i class="fa fa-fw fa-industry"></i>EcoPoints</a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tabvalues">
                            <i class="fa fa-fw fa-cog"></i>Configurações</a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tabcadmaterial">
                            <i class="fa fa-fw fa-recycle"></i>Incluir Material</a>
                    </li>
                    <li class="nav-item bg-light">
                        <a href="" class="nav-link" data-toggle="pill" data-target="#tabcoletarmaterial">
                            <i class="fa fa-fw fa-recycle"></i>Registrar coleta de Material</a>
                    </li>
                </ul>
            </div>
            <div class="bg-light col-7">
                    <!-- TAB PANE PAINEL-->
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="tabpainel" role="tabpanel">
                            <h1 class="">
                                <i class="fa fa-fw fa-tachometer"></i>Painel</h1>
                            <hr>
                            <table class="columns w-100 col-xs-4">
                                <tbody>
                                <tr>
                                    <td class="w-50">
                                        <div class="row my-4">
                                            <div class="col-7 col-md-12">
                                                <h4 class="text-primary">Meus Pontos </h4>
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                                        <i class="d-block fa fa-1x fa-diamond"></i>Resgatavel
                                                        <span class="points badge-primary badge-pill"></span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                                        <i class="d-block fa fa-1x fa-diamond"></i>Recente
                                                        <span class="newpoints badge-warning badge-pill"></span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                                        <i class="d-block fa fa-1x fa-diamond"></i>Saldo Atual
                                                        <span class="atualpoints badge-secondary badge-pill"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="w-50">
                                        <div>
                                            <div class="col-7 col-md-12">
                                                <h4 class="text-primary">Hanking Regional </h4>
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                                        <i class="d-block fa fa-1x fa-diamond"></i>Ceilândia
                                                        <span class="globalpoints1 badge-primary badge-pill"></span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                                        <i class="d-block fa fa-1x fa-diamond"></i>Taguatinga
                                                        <span class="globalpoints2 badge-warning badge-pill"></span>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-left navbar-ontop">
                                                        <i class="d-block fa fa-1x fa-diamond"></i>Samambaia
                                                        <span class="globalpoints3 badge-secondary badge-pill"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <!--Table and divs that hold the pie charts-->
                            <table class="columns w-100 col-xs-4">
                                <tbody>
                                <tr>
                                    <td class="w-50">
                                        <div id="piechart_div"></div>
                                    </td>
                                    <td class="w-50">
                                        <div id="barchart_div"></div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--/ TAB PANE PAINEL-->
                        <!-- TAB PANE FORMULARIO CADASTRO -->
                        <div class="tab-pane fade" id="tadpessoaldata" role="tabpanel">
                            <h4 class="mb-3 text-center">
                                <b class="">Atualizar Dados</b>
                            </h4>
                            <div class="col-md-12 order-md-1">
                                <form class="needs-validation" novalidate="">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="firstName">Nome</label>
                                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                                            <div class="invalid-feedback"> Valid first name is required. </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="lastName">Sobrenome</label>
                                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                                            <div class="invalid-feedback"> Valid last name is required. </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="username">Username</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">@</span>
                                            </div>
                                            <input type="text" class="form-control" id="username" placeholder="Username" required="">
                                            <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="email">E-mail </label>
                                        <input type="email" class="form-control" id="email" placeholder="nome@email.com" required="required">
                                        <div class="invalid-feedback"> Por favor informe um endereço de e-mail válido.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="address">Endereço</label>
                                        <input type="text" class="form-control" id="address" placeholder="QNN 20 Conjunto D 31" required="">
                                        <div class="invalid-feedback"> Por favor informe um endereço válido. </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="address2">Complemento&nbsp;
                                            <span class="text-muted">(Opicional)</span>
                                        </label>
                                        <input type="text" class="form-control" id="address2" placeholder="Quadra ou Logradouro"> </div>
                                    <div class="row">
                                        <div class="col-md-5 mb-3">
                                            <label for="country">Cidade</label>
                                            <input type="text" class="form-control" id="country" placeholder="" required="">
                                            <div class="invalid-feedback"> Por favor informe uma cidade válida.</div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="state">Estado</label>
                                            <select class="custom-select d-block w-100" id="state" required="">
                                                <option value="">Escolha um estado...</option>
                                                <option value="	AC	"> Acre </option>
                                                <option value="	AL	"> Alagoas </option>
                                                <option value="	AP	"> Amapá </option>
                                                <option value="	AM	"> Amazonas </option>
                                                <option value="	BA	"> Bahia </option>
                                                <option value="	CE	"> Ceará </option>
                                                <option value="	DF	"> Distrito Federal </option>
                                                <option value="	ES	"> Espírito Santo </option>
                                                <option value="	GO	"> Goiás </option>
                                                <option value="	MA	"> Maranhão </option>
                                                <option value="	MT	"> Mato Grosso </option>
                                                <option value="	MS	"> Mato Grosso do Sul </option>
                                                <option value="	MG	"> Minas Gerais </option>
                                                <option value="	PA	"> Pará </option>
                                                <option value="	PB	"> Paraíba </option>
                                                <option value="	PR	"> Paraná </option>
                                                <option value="	PE	"> Pernambuco </option>
                                                <option value="	PI	"> Piauí </option>
                                                <option value="	RJ	"> Rio de Janeiro </option>
                                                <option value="	RN	"> Rio Grande do Norte </option>
                                                <option value="	RS	"> Rio Grande do Sul </option>
                                                <option value="	RO	"> Rondônia </option>
                                                <option value="	RR	"> Roraima </option>
                                                <option value="	SC	"> Santa Catarina </option>
                                                <option value="	SP	"> São Paulo </option>
                                                <option value="	SE	"> Sergipe </option>
                                                <option value="	TO	"> Tocantins </option>
                                            </select>
                                            <div class="invalid-feedback"> Por favor Selecione um estado. </div>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="zip">CEP</label>
                                            <input type="text" class="form-control" id="zip" placeholder="" required="">
                                            <div class="invalid-feedback"> Código postal é obrigatório. </div>
                                        </div>
                                    </div>
                                    <hr class="mb-4">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Foto do Perfil</span>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="inputGroupFile01">
                                            <label class="custom-file-label" for="inputGroupFile01">Escolher do arquivo...</label>
                                        </div>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="same-address" value="on">
                                        <label class="custom-control-label" for="same-address">Concordo com os termos de uso e políticas do site.</label>
                                    </div>
                                    <hr class="mb-4">
                                    <button type="submit" class="btn btn-secondary btn-block">Atualizar&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                        <br> </button>
                                    <hr class="mb-4"> </form>
                            </div>
                        </div>
                        <!--/ TAB PANE FORMULARIO CADASTRO -->
                        <!-- TAB PANE MENSAGENS -->
                        <div class="tab-pane fade" id="tabmessage" role="tabpanel">
                            <h1 class="">Mensagens</h1>
                            <hr>
                            <div class="alert alert-success" role="alert">
                                <h4 class="alert-heading">Voce acaba de recerber 10.000 pontos!</h4>
                                <p>Obrigado por contribuir com o meio ambiente! dentro de 30 dias esses pontos se tornarão resgagáveis.</p>
                                <hr>
                                <p class="mb-0">Obrigago!. Equipe Eco Money</p>
                            </div>
                            <div class="alert alert-warning" role="alert">
                                <h4 class="alert-heading">Voce acaba de recerber 10.000 pontos!</h4>
                                <p>Obrigado por contribuir com o meio ambiente! dentro de 30 dias esses pontos se tornarão resgagáveis.</p>
                                <hr>
                                <p class="mb-0">Obrigago!. Equipe Eco Money</p>
                            </div>
                            <div class="alert alert-success" role="alert">
                                <h4 class="alert-heading">Voce acaba de recerber 10.000 pontos!</h4>
                                <p>Obrigado por contribuir com o meio ambiente! dentro de 30 dias esses pontos se tornarão resgagáveis.</p>
                                <hr>
                                <p class="mb-0">Obrigago!. Equipe Eco Money</p>
                            </div>
                        </div>
                        <!-- /TAB PANE MENSAGENS -->
                        <!-- TAB PANE HISTORICO -->
                        <div class="tab-pane fade" id="tabhistory" role="tabpanel">
                            <h1 class="">Histórico de Resgates realizados</h1>
                            <hr>
                            <div class="alert" role="alert">
                                <table class="table">
                                    <tbody>
                                    <tr class="alert alert-success">
                                        <td>
                                            <h3>Status</h3>
                                        </td>
                                        <td>
                                            <h3>Operação</h3>
                                        </td>
                                        <td>
                                            <h3>Valor</h3>
                                        </td>
                                    </tr>
                                    <tr class="text-warning">
                                        <td>
                                            <i class="fa fa-hourglass-half"></i>Pendente</td>
                                        <td>
                                            <i class="fa fa-paypal"></i> Resgate de saldo</td>
                                        <td>
                                            <i class="fa fa-diamond"></i>75300</td>
                                    </tr>
                                    <tr class="text-success">
                                        <td>
                                            <i class="fa fa-retweet"></i> Concluído</td>
                                        <td>
                                            <i class="fa fa-recycle"></i> Plastico Pet</td>
                                        <td>
                                            <i class="fa fa-diamond"></i> 1300</td>
                                    </tr>
                                    <tr class="text-success">
                                        <td>
                                            <i class="fa fa-retweet"></i>
                                        </td>
                                        <td>
                                            <i class="fa fa-recycle"></i> Plastico Pet</td>
                                        <td>
                                            <i class="fa fa-diamond"></i>1300</td>
                                    </tr>
                                    <tr class="text-success">
                                        <td>
                                            <i class="fa fa-retweet"></i>
                                        </td>
                                        <td>
                                            <i class="fa fa-recycle"></i> Alumínio </td>
                                        <td>
                                            <i class="fa fa-diamond"></i>5300</td>
                                    </tr>
                                    <tr class="text-success">
                                        <td>
                                            <i class="fa fa-retweet"></i>
                                        </td>
                                        <td>
                                            <i class="fa fa-recycle"></i> Plastico Pet</td>
                                        <td>
                                            <i class="fa fa-diamond"></i>1300</td>
                                    </tr>
                                    <tr class="text-primary">
                                        <td>
                                            <i class="fa fa-hourglass-half"></i> Pendente </td>
                                        <td>
                                            <i class="fa fa-recycle"></i> Plastico Pet</td>
                                        <td>
                                            <i class="fa fa-diamond"></i>1300</td>
                                    </tr>
                                    <tr class="text-success">
                                        <td>
                                            <i class="fa fa-retweet"></i>
                                        </td>
                                        <td>
                                            <i class="fa fa-recycle"></i> Plastico Pet</td>
                                        <td>
                                            <i class="fa fa-diamond"></i>1300</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!--/ TAB PANE HISTORICO -->
                        <!-- TAB PANE NOTICIAS -->
                        <div class="tab-pane fade" role="tabpanel" id="tabnotices">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe src="https://www.youtube.com/embed/jYFQGF4dMrs?rel=0&amp;controls=0&amp;showinfo=0" allowfullscreen="" allow="autoplay; encrypted-media" frameborder="0" height="315" width="560"></iframe>
                            </div>
                            <div class="py-5 navbar-ontop">
                                <div class="container-fluid "">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h1 class="text-center mb-5 text-dark">Galeria de Vídeos</h1>
                                        </div>
                                    </div>
                                <div>
                                    <p class="text-center">Como separar os materias recicláveis</p>
                                    <hr>
                                </div>
                                    <div class="row">
                                        <div class="p-0 col-md-4 col-4">
                                                <iframe src="https://www.youtube.com/embed/jYFQGF4dMrs?rel=0&amp;controls=0&amp;showinfo=0" allowfullscreen="" allow="autoplay; encrypted-media" frameborder="0" height="100%" width="auto" class="embed-responsive embed-responsive-4by3"></iframe>
                                        </div>
                                        <div class="p-0 col-md-4 col-4">
                                            <iframe src="https://www.youtube.com/embed/jYFQGF4dMrs?rel=0&amp;controls=0&amp;showinfo=0" allowfullscreen="" allow="autoplay; encrypted-media" frameborder="0" height="100%" width="auto" class="embed-responsive embed-responsive-4by3"></iframe>
                                        </div>
                                        <div class="p-0 col-md-4 col-4">
                                            <iframe src="https://www.youtube.com/embed/jYFQGF4dMrs?rel=0&amp;controls=0&amp;showinfo=0" allowfullscreen="" allow="autoplay; encrypted-media" frameborder="0" height="100%" width="auto"class="embed-responsive embed-responsive-4by3"></iframe>
                                        </div>
                                    </div>
                                    <div>
                                        <hr>
                                    </div>
                                    <div class="row">
                                        <div class="p-0 col-md-4 col-4">
                                            <iframe src="https://www.youtube.com/embed/jYFQGF4dMrs?rel=0&amp;controls=0&amp;showinfo=0" allowfullscreen="" allow="autoplay; encrypted-media" frameborder="0" height="100%" width="auto" class="embed-responsive embed-responsive-4by3"></iframe>
                                        </div>
                                        <div class="p-0 col-md-4 col-4">
                                            <iframe src="https://www.youtube.com/embed/jYFQGF4dMrs?rel=0&amp;controls=0&amp;showinfo=0" allowfullscreen="" allow="autoplay; encrypted-media" frameborder="0" height="100%" width="auto" class="embed-responsive embed-responsive-4by3"></iframe>
                                        </div>
                                        <div class="p-0 col-md-4 col-4">
                                            <iframe src="https://www.youtube.com/embed/jYFQGF4dMrs?rel=0&amp;controls=0&amp;showinfo=0" allowfullscreen="" allow="autoplay; encrypted-media" frameborder="0" height="100%" width="auto"class="embed-responsive embed-responsive-4by3"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- /TAB PANE NOTICIAS -->
                    <!-- TAB PANE CONTA VIRTUAL -->
                    <div class="tab-pane fade" id="tabvirtualacount" role="tabpanel">
                        <h1 class="">Conta Virtual</h1>
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Sua conta virtual cadastrada é:</h4>
                            <p contenteditable="true">Empresa:&nbsp;
                                <i class="fa fa-paypal"></i> PayPal
                                <br>E-mail:
                                <b>seuemail@ecomoney.eco</b>
                            </p>
                            <hr>
                            <p class="mb-0">Obrigago!. Equipe Eco Money</p>
                        </div>
                        <hr>
                        <div class="row  col-md-4 align-content-center">
                            <div class="col-md-4">

                                <img class="img-fluid d-block" src="assets/pagseguro.png" width="50%" height="auto">

                            </div>
                            <div class="col-md-4">
                                <img class="img-fluid d-block" src="assets/paypal.png" width="50%" height="auto">
                            </div>
                        </div>
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Digite seu endereço de e-mail</h4>
                            <form class="form-inline">
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Seu email">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">Salvar</button>
                                    </div>
                                </div>
                            </form>
                            <p>Obrigado por contribuir com o meio ambiente! dentro de 30 dias esses pontos se tornarão resgagáveis.</p>
                            <hr>
                            <p class="mb-0">Obrigago!. Equipe Eco Money</p>
                        </div>
                    </div>
                    <!-- /TAB PANE CONTA VIRTUAL -->
                    <!-- TAB PANE MAPS -->
                    <div class="tab-pane fade" id="tabmaps" role="tabpanel">
                    <h1 class="">Pontos de Coleta</h1>
                    <hr>
                    <h5>EcoPoints</h5>
                    <div id="map"></div>
                        <script>
                            var customLabel = {
                                restaurant: {
                                    label: 'R'
                                },
                                bar: {
                                    label: 'B'
                                }
                            };

                            function initMap() {
                                var map = new google.maps.Map(document.getElementById('map'), {
                                    center: new google.maps.LatLng(-15.829302199999997 , -48.1113133),
                                    zoom: 10
                                });
                                var infoWindow = new google.maps.InfoWindow;

                                // Seta o local do arquivo PHP que gera o xml dos endereços
                                downloadUrl('http://localhost/www.ecomoney.com.br/view/xmlmaker.php', function(data) {
                                    var xml = data.responseXML;
                                    var markers = xml.documentElement.getElementsByTagName('marker');
                                    Array.prototype.forEach.call(markers, function(markerElem) {
                                        var id = markerElem.getAttribute('id');
                                        var name = markerElem.getAttribute('name');
                                        var address = markerElem.getAttribute('address');
                                        var type = markerElem.getAttribute('type');
                                        var point = new google.maps.LatLng(
                                            parseFloat(markerElem.getAttribute('lat')),
                                            parseFloat(markerElem.getAttribute('lng')));

                                        var infowincontent = document.createElement('div');
                                        var strong = document.createElement('strong');
                                        strong.textContent = name
                                        infowincontent.appendChild(strong);
                                        infowincontent.appendChild(document.createElement('br'));

                                        var text = document.createElement('text');
                                        text.textContent = address
                                        infowincontent.appendChild(text);
                                        var icon = customLabel[type] || {};
                                        var marker = new google.maps.Marker({
                                            map: map,
                                            position: point,
                                            label: icon.label
                                        });
                                        marker.addListener('click', function() {
                                            infoWindow.setContent(infowincontent);
                                            infoWindow.open(map, marker);
                                        });
                                    });
                                });
                            }



                            function downloadUrl(url, callback) {
                                var request = window.ActiveXObject ?
                                    new ActiveXObject('Microsoft.XMLHTTP') :
                                    new XMLHttpRequest;

                                request.onreadystatechange = function() {
                                    if (request.readyState == 4) {
                                        request.onreadystatechange = doNothing;
                                        callback(request, request.status);
                                    }
                                };

                                request.open('GET', url, true);
                                request.send(null);
                            }

                            function doNothing() {}
                        </script>
                        <script async defer
                                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHqRLShHStECith4xMUNdmZctvLK_EFZU&callback=initMap">
                        </script>

                </div>
                    <!-- /TAB PANE MAPS -->
                    <!-- TAB PANE ENDEREÇO -->
                    <div class="tab-pane fade" id="tabadress" role="tabpanel">
                        <h1 class="">Seu Endereço</h1>
                        <hr>
                        <h5>Verifique seus dados</h5>
                        <button onclick="getLocation()" class="btn-primary form-control">Pegar localização</button>
                        <p id="geoposicao"></p>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15354.018889125986!2d-48.11509455!3d-15.830048399999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71024a97b666b137!2s7Informatica-TI!5e0!3m2!1spt-BR!2sbr!4v1523409465221"
                                width="100%" height="600" frameborder="0" style="border:0" allowfullscreen="">

                        </iframe>

                    </div>
                    <!-- /TAB PANE MAPS -->
                    <!-- TAB PANE VALORES -->
                    <div class="tab-pane fade" role="tabpanel" id="tabvalues">
                             <table class="table">
                                <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Cod</th>
                                    <th scope="col">Material</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col" ></th>
                                    <th scope="col"></th>


                                </tr>
                                </thead>

                                <?php
                                foreach ($data as $key => $value) {
                                    $moeda ="R$";
                                    echo
                                    "<tbody>
                                     <tr>
                                    <th scope='row'>ECO - 0". $value['id_materialtypes'] ."</th>
                                    <td><input type='text' class='form-control' value=". $value['desc_material'] ." readonly='readonly' disabled='disabled'></td>" .
                                    "<td><input type='text'  class='form-control' value=". $moeda . $value['price'] ." readonly='readonly' disabled='disabled'></td>" .
                                    "<td><button type='button'  class='btn-warning form-control' value='' >Alterar</button></td>
                                    <td><button type='button'  class='btn-danger form-control' value='' >Excluir</button></td>
                                    </tr>
                                    </tbody>
                                    ";
                               }
                                ?>
                            </table>
                    </div>
                    <!-- /TAB PANE VALUES -->
                    <!-- TAB PANE CADASTRO DE MATERIAL -->
                    <div class="tab-pane fade" role="tabpanel" id="tabcadmaterial">
                    <form action="#" method="post" class="form-control">
                        <h1 class="bg-dark text-center">Cadastro de Material</h1>
                        <table class="table">

                            <thead class="thead-dark">
                            </thead>
                            <tbody>
                            <tr>
                                <td><input type="text" class="form-control" value="Alumínio"></td>
                            </tr>
                            <tr>
                                <td><input type="text"  class="form-control" value="1.50"></td>
                            </tr>
                            <tr>
                                <td><button type="button"  class="btn-success form-control" value="" >Salvar</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </form>

                </div>
                    <!-- /TAB PANE CADASTRO DE MATERIAL -->
                    <!-- TAB PANE COLETA DE MATERIAL -->
                    <div class="tab-pane fade" role="tabpanel" id="tabcoletarmaterial">
                        <form action="#" method="post" class="form-control">
                            <h1 class="bg-light text-center">Registrar coleta de Material</h1>
                            <table class="table">

                                <thead class="thead-dark">
                                </thead>
                                <tbody>
                                <tr>
                                    <label for="form"> Selecione um material</label>
                                    <td>
                                        <select class="form-control" id="select_material" required>
                                            <option><a href="#">Alumínio</a></option>
                                            <option><a href="#">Plastico</a></option>
                                            <option><a href="#">Metal - Cobre</a></option>
                                            <option><a href="#">Metal - Ferro</a></option>
                                            <option><a href="#">Metal - Alumínio</a></option>
                                            <option><a href="#">Metal - Misto</a></option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label for="form">Informe a quantidade:</label><input type="text"  class="form-control" placeholder="1.50 . kg" required></td>
                                </tr>
                                <tr>
                                    <td><label for="form">CPF:</label><input type="text"  class="form-control" placeholder="000.000.000-00" required></td>
                                </tr>
                                <tr>
                                    <td><button type="button"  class="btn-success form-control" value="" >Registrar</button></td>
                                </tr>
                                </tbody>
                            </table>
                        </form>

                    </div>
                    <!-- /TAB PANE COLETA DE MATERIAL-->
                    <!-- Article style section -->
                    <!-- Features -->
                    <!-- Features -->
                    <!-- Carousel reviews -->
                    <!-- Call to action -->
                    <!-- Footer -->
                    <!-- JavaScript dependencies -->
                    <script src="http://code.jquery.com/jquery-3.2.1.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <!-- Script: Smooth scrolling between anchors in the same page -->
                    <script src="js/smooth-scroll.js"></script>
                    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                    <script type="text/javascript">
                        // Load Charts and the corechart and barchart packages.
                        google.charts.load('current', {'packages':['corechart']});

                        // Draw the pie chart and bar chart when Charts is loaded.
                        google.charts.setOnLoadCallback(drawChart);

                        function drawChart() {

                            var data = new google.visualization.DataTable();
                            data.addColumn('string', 'Topping');
                            data.addColumn('number', 'Slices');
                            data.addRows([
                                ['Plastico', 300],
                                ['Cobre', 110],
                                ['Alumínio', 50],
                                ['Papelão', 10],
                                ['Organicos', 20]
                            ]);

                            var piechart_options = {title:'Quantidade de material entrege',
                                width:410,
                                height:300,
                                legend: 'none',
                                backgroundColor: 'transparent'};
                            var piechart_options = {title:'Quantidade de material entrege',
                                width:410,
                                height:300,
                                backgroundColor:'transparent'};
                            var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
                            piechart.draw(data, piechart_options);

                            var barchart_options = {title:'Pontuação por Material',
                                width:410,
                                height:300,
                                legend: 'none',
                                backgroundColor:'transparent'};
                            var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
                            barchart.draw(data, barchart_options);
                        }
                    </script>
                    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
                    <script src="js/animationCounter.js" charset="utf-8"></script>
                    <script type="text/javascript">
                        $('#counter-block').ready(function(){
                            $('.points').animationCounter({
                                start: 600,
                                step: 1,
                                end:1320,
                                delay:10
                            });
                            $('.globalpoints1').animationCounter({
                                start: 3245677,
                                end: 3545677,
                                step: 10,
                                delay:20,
                                txt: ' Kg'
                            });
                            $('.globalpoints2').animationCounter({
                                start: 225677,
                                end: 245677,
                                step: 10,
                                delay:20,
                                txt: ' Kg'
                            });
                            $('.globalpoints3').animationCounter({
                                start: 140000,
                                end: 145677,
                                step: 10,
                                delay:20,
                                txt: ' Kg'
                            });
                            $('.newpoints').animationCounter({
                                start: 50,
                                end: 570,
                                step: 4,
                                delay: 10
                            });
                            $('.atualpoints').animationCounter({
                                start: 490,
                                end: 1560,
                                step: 20,
                                delay: 900,
                                txt: ' pst'
                            });
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>
</body>

</html>
