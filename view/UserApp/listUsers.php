<div class="modal" id="deleteUser">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header" id="deleteUser">
                <h5 class="modal-title">Excluir Usuário Operadores</h5> <button type="button" class="close" data-dismiss="modal"> <span>×</span> </button>
            </div>
            <div class="modal-body">
                <p>Tem certeza que deseja excluir este usuário</p>
            </div>
            <div class="modal-footer"> <button type="button" class="btn btn-primary">Sim</button> <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button> </div>
        </div>
    </div>
</div>
<div class="bg-light py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
               <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">E-Mail</th>
                        <th scope="col">CPF</th>
                        <th scope="col"></th>
                        <th scope="col">
                            <button type="button" onclick="load_caduser()" id="btnCadUser" class="btn btn-success"><i class="fas fa-plus"></i> Novo Usuário</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">MAT - 001</th>
                        <td><input type="text" class="form-control" value="Marcos Rubens de Camargo" readonly="readonly" disabled="disabled"></td>
                        <td><input type="text" class="form-control" value="360.648.458-56" readonly="readonly" disabled="disabled"></td>
                        <td>
                            <button type="button" onclick="load_edituser()" id="btnCadUser" class="btn btn-warning"><i class="fas fa-users"></i>Editar </button>
                        </td>
                        <td>
                            <a class="btn btn-danger" href="#" data-toggle="modal" data-target="#deleteUser">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">MAT - 002</th>
                        <td><input type="text" class="form-control" value="André Luis Rodrigues" readonly="readonly" disabled="disabled"></td>
                        <td><input type="text" class="form-control" value="031.064.845-22" readonly="readonly" disabled="disabled"></td>
                        <td>
                            <button type="button" onclick="load_edituser()" id="btnCadUser" class="btn btn-warning"><i class="fas fa-users"></i>Editar </button>
                        </td>
                        <td>
                            <button type="button" class="btn-danger form-control" value="">Excluir</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">MAT - 003</th>
                        <td><input type="text" class="form-control" value="Josilene da Silva" readonly="readonly" disabled="disabled"></td>
                        <td><input type="text" class="form-control" value="161.004.705-22" readonly="readonly" disabled="disabled"></td>
                        <td>
                            <button type="button" onclick="load_edituser()" id="btnCadUser" class="btn btn-warning"><i class="fas fa-users"></i>Editar </button>
                        </td>
                        <td>
                            <button id="showModal"  onclick="showModal()" type="button" class="btn btn-danger"> Excluir </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous" style=""></script>
