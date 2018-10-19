<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 17/04/2018
 * Time: 00:52
 */
?>
<?php
include_once 'header.php';
?>
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
            <div class="col-md-12">
                <form class="needs-validation" novalidate="">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="mb-4 text-center">Preencha seus dados</h1>
                        </div>
                    </div>
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
                        <input type="text" class="form-control" id="address2" placeholder="Quadra ou Logradouro">
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="country">CPF:</label>
                            <input type="text" class="form-control" id="cpf" placeholder="" required="" onfocus="javascript: retirarFormatacao(this);" onblur="javascript: formatarCampo(this);" maxlength="14">
                            <div class="invalid-feedback"> Por favor informe uma CPF válido.</div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="country">CNPJ:</label>
                            <input type="text" class="form-control" id="cnpj" placeholder="" required="" onfocus="javascript: retirarFormatacao(this);" onblur="javascript: formatarCampo(this);" maxlength="14">
                            <div class="invalid-feedback"> Por favor informe uma CNPJ válido.</div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="zip">Telefone</label>
                            <input type="text" class="form-control cel-sp-mask" placeholder="Ex.: (00) 00000-0000" data-mask="(99) 99999-9999" maxlength="15">
                            <div class="invalid-feedback"> Telefone</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="country">Cidade</label>
                            <input type="text" class="phone-ddd-mask" id="country" placeholder="" required="">
                            <div class="invalid-feedback"> Por favor informe uma cidade válida.</div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="state">Estado</label>
                            <select class="custom-select d-block w-100" id="state" required="">
                                <option value="">Escolha um estado...</option>
                                <option value="" id="1">Escolha...</option>
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
                        <div class="col-md-4 mb-3">
                            <label for="zip">CEP</label>
                            <input type="text" class="form-control" id="zip" placeholder="" required="">
                            <div class="invalid-feedback"> Código postal é obrigatório. </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="same-address" value="on">
                        <label class="custom-control-label" for="same-address">Concordo com os termos de uso e políticas do site.</label>
                    </div>
                    <hr class="mb-4">
                    <button type="submit" class="btn btn-secondary btn-block">Cadastrar
                        <br> </button>
                    <hr class="mb-4"> </form>
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
