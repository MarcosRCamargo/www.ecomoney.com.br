<?php $user = "Marcos Rubens de Camargo"?>
<!DOCTYPE html>
<html>
<link rel="icon" href="assets/app/icon.png"><title>EcoMoney - Coleta Inteligente</title>
<meta charset="utf-8">
<script src="https://www.w3schools.com/lib/w3.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
<link rel="stylesheet"  type="text/css" href="css/ecomoney.less">
<link rel="stylesheet"  type="text/css" href="css/notifIt.css">
<link rel="stylesheet"  type="text/css" href="../css/aquamarine.css">
<link rel="stylesheet"  type="text/css" href="../mobile/app.scss">
<link rel="stylesheet"  type="text/css" href="../mobile/theme.scss">
<script src="GestorApp/js/Materials.js"></script>
<script src="GestorApp/js/notifIt.min.js"></script>
<script src="GestorApp/js/notifIt.js"></script>
<script src="js/animationCounter.js" charset="utf-8"></script>
<body onload="footerInclude()">

<div class="modal" id="deleteUser">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header" id="deleteUser">
                <h5 class="modal-title">Excluir Usuário</h5>
                <button type="button" class="close" data-dismiss="modal"><span>×</span></button>
            </div>
            <div class="modal-body">
                <p>Tem certeza que deseja excluir este Usuário?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger">Sim</button>
                <button type="button" class="btn btn-success" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
</div>
<div class="modal" id="deleteMaterial">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header" id="deleteMaterial">
                <h5 class="modal-title">Excluir Material</h5>
                <button type="button" class="close" data-dismiss="modal"><span>×</span></button>
            </div>
            <div class="modal-body">
                <p>Tem certeza que deseja excluir este Material?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger">Sim</button>
                <button type="button" class="btn btn-success" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
</div>
<div class="modal" id="dataPartner">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header" id="dataPartner">
                <h2 class="modal-title">Visualizar dados</h2>
                <button type="button" class="close" data-dismiss="modal"><span>×</span></button>
            </div>
            <div class="modal-body">
<!--               dados da empresa-->
                <div class="modal-content">
                    <h4 class="mb-3 text-center">
                        <b class="">Dados da Empresa</b>
                    </h4>
                    <div class="col-md-12 order-md-1">
                        <form class="needs-validation" novalidate="">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="firstName">Nome</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="" value=""
                                           required="">
                                    <div class="invalid-feedback"> Valid first name is required.</div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="lastName">Sobrenome</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="" value=""
                                           required="">
                                    <div class="invalid-feedback"> Valid last name is required.</div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="username">Username</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">@</span>
                                    </div>
                                    <input type="text" class="form-control" id="username" placeholder="Username"
                                           required="">
                                    <div class="invalid-feedback" style="width: 100%;"> Your username is required.</div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="email">E-mail </label>
                                <input type="email" class="form-control" id="email" placeholder="nome@email.com"
                                       required="required">
                                <div class="invalid-feedback"> Por favor informe um endereço de e-mail válido.</div>
                            </div>
                            <div class="mb-3">
                                <label for="address">Endereço</label>
                                <input type="text" class="form-control" id="address" placeholder="QNN 20 Conjunto D 31"
                                       required="">
                                <div class="invalid-feedback"> Por favor informe um endereço válido.</div>
                            </div>
                            <div class="mb-3">
                                <label for="address2">Complemento&nbsp;
                                    <span class="text-muted">(Opicional)</span>
                                </label>
                                <input type="text" class="form-control" id="address2"
                                       placeholder="Quadra ou Logradouro"></div>
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
                                        <option value="	AC	"> Acre</option>
                                        <option value="	AL	"> Alagoas</option>
                                        <option value="	AP	"> Amapá</option>
                                        <option value="	AM	"> Amazonas</option>
                                        <option value="	BA	"> Bahia</option>
                                        <option value="	CE	"> Ceará</option>
                                        <option value="	DF	"> Distrito Federal</option>
                                        <option value="	ES	"> Espírito Santo</option>
                                        <option value="	GO	"> Goiás</option>
                                        <option value="	MA	"> Maranhão</option>
                                        <option value="	MT	"> Mato Grosso</option>
                                        <option value="	MS	"> Mato Grosso do Sul</option>
                                        <option value="	MG	"> Minas Gerais</option>
                                        <option value="	PA	"> Pará</option>
                                        <option value="	PB	"> Paraíba</option>
                                        <option value="	PR	"> Paraná</option>
                                        <option value="	PE	"> Pernambuco</option>
                                        <option value="	PI	"> Piauí</option>
                                        <option value="	RJ	"> Rio de Janeiro</option>
                                        <option value="	RN	"> Rio Grande do Norte</option>
                                        <option value="	RS	"> Rio Grande do Sul</option>
                                        <option value="	RO	"> Rondônia</option>
                                        <option value="	RR	"> Roraima</option>
                                        <option value="	SC	"> Santa Catarina</option>
                                        <option value="	SP	"> São Paulo</option>
                                        <option value="	SE	"> Sergipe</option>
                                        <option value="	TO	"> Tocantins</option>
                                    </select>
                                    <div class="invalid-feedback"> Por favor Selecione um estado.</div>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="zip">CEP</label>
                                    <input type="text" class="form-control" id="zip" placeholder="" required="">
                                    <div class="invalid-feedback"> Código postal é obrigatório.</div>
                                </div>
                            </div>
                            <hr class="mb-4">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Foto do Perfil</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01">
                                    <label class="custom-file-label" for="inputGroupFile01">Escolher do
                                        arquivo...</label>
                                </div>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="same-address" value="on">
                                <label class="custom-control-label" for="same-address">Concordo com os termos de uso e
                                    políticas do site.</label>
                            </div>
                            <hr class="mb-4">
                            <button type="submit" class="btn btn-secondary btn-block">Alterar&nbsp; &nbsp; &nbsp; &nbsp;
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                <br></button>
                            <hr class="mb-4">
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger">Confirmar</button>
                <button type="button" class="btn btn-success" data-dismiss="modal">Rejeitar</button>
            </div>
        </div>
    </div>
</div>

<nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-primary ">
    <div class="container-fluid">
        <a class="navbar-brand" href="?page=index" onclick="load_home()" >
            <i class="fab fa-envira"></i>
            <b class="logo">EcoMoney</b>
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-1x fa-user"></i> Olá <?php echo $user?></a>
                </li>
                <li class="nav-item">
                </li>
            </ul>
            <a class="btn btn-secondary m-2" onclick="login_Sys()">
                <i class="fa fa-user fa-fw"></i>Sair</a>
        </div>
    </div>
</nav>
<div>
    <div class="container py-3"> </div>
</div>
<div>
    <div class="container py-3"> </div>
</div>
<div class="container-fluid"  style="background-image: url('../assets/ecomoney.png');">
    <div class="row">

        <div class="col-3">
            <div class="card bg-secondary">
                <img class="rounded-circle mx-auto py-1" src="/assets/perfil.jpg" alt="Card image" width="30%">
                <div class="card-body">
                    <p class="card-title">Seja bem Vindo <strong>Marcos Rubens de Camargo</strong> Gestor - EcoMoney</p>
                    <p class="card-text"><strong></strong></p>
                </div>
            </div>
            <div class="nav flex-column bg-light" role="tablist" aria-orientation="vertical">
                <a class="nav-link" id="v-page-home-tab" onclick="load_home()" data-toggle="page" href="#home" aria-controls="home" aria-selected="true"><i class="fas fa-home"></i> Início</a>
                <a class="nav-link" id="v-page-users-tab" onclick="load_showusers()" data-toggle="page" href="#users" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-users"></i> Usuários</a>
                <a class="nav-link" id="v-page-user-tab" onclick="load_user()" data-toggle="page" href="#data-user" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-user"></i> Perfil</a>
                <a class="nav-link" id="v-page-edit-user-tab" onclick="load_getMaterials()"data-toggle="page" href="#get-materials" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fas fa-cogs"></i> Configurar Materiais</a>
                <a class="nav-link" id="v-page-payments-requests" onclick="load_payRequests()" data-toggle="page" href="#pay-requests" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-donate"></i> Pagamento de Resgates</a>
                <a class="nav-link" id="v-page-settings-tab" onclick="load_patners()"data-toggle="page" href="#partnes-data" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fas fa-check-square"></i> Validar Cadastros</a>
            </div>
        </div>
        <div id="content"  class="col-xl-8">

        </div>
    </div>
</div>

<div w3-include-html="view/GestorApp/Footer.php">

</div>

<script>
    function load_showusers(){
        document.getElementById("content").innerHTML='<div w3-include-html="view/GestorApp/getUsers.php"></div>';
        w3.includeHTML();
    }
    function load_home(){
        document.getElementById("content").innerHTML='<div w3-include-html="view/GestorApp/Home.php"></div>';
        w3.includeHTML();
    }
    function edit_user(){
        document.getElementById("content").innerHTML='<div w3-include-html="view/GestorApp/EditUser.php"></div>';
        w3.includeHTML();
    }
    function load_caduser(){
        document.getElementById("content").innerHTML='<div w3-include-html="view/GestorApp/CadUser.php"></div>';
        w3.includeHTML();
    }
    function load_user(){
        document.getElementById("content").innerHTML='<div w3-include-html="view/GestorApp/dataUser.php"></div>';
        w3.includeHTML();
    }
    function load_getMaterials(){
        document.getElementById("content").innerHTML='<div w3-include-html="view/GestorApp/getMaterials.php"></div>';
        w3.includeHTML();
    }
    function load_patners(){
        document.getElementById("content").innerHTML='<div w3-include-html="view/GestorApp/listPartnes.php"></div>';
        w3.includeHTML();
    }function load_payRequests(){
        document.getElementById("content").innerHTML='<div w3-include-html="view/GestorApp/payRequests.php"></div>';
        w3.includeHTML();
    }function refreshPage() {
        cache:false;

    }
    $('#myModal').modal('show')
    function footerInclude() {
        document.getElementById("content").innerHTML='<div w3-include-html="view/GestorApp/Home.php"></div>';
        w3.includeHTML();
    }
    function login_Sys() {
        window.location.href = "?page=login";
    }

</script>

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
<script src="GestorApp/js/animationCounter.js" charset="utf-8"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous" style=""></script>

