<div class="bg-light py-5">
    <h1 class="text-center">Adminsitradores EcoMoney</h1>
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
                            <button type="button" onclick="load_caduser()" id="btnCadUser" class="btn btn-success"><i
                                    class="fas fa-plus"></i> Novo Usuário
                            </button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">MAT - 001</th>
                        <td><input type="text" class="form-control" value="Marcos Rubens de Camargo" readonly="readonly"
                                   disabled="disabled"></td>
                        <td><input type="text" class="form-control" value="360.648.458-56" readonly="readonly"
                                   disabled="disabled"></td>
                        <td>
                            <button type="button" onclick="edit_user()" id="btnCadUser" class="btn btn-warning"><i
                                    class="fas fa-users"></i>Editar
                            </button>
                        </td>
                        <td>
                            <button id="showModal" type="button" class="btn btn-danger" data-toggle="modal"
                                    data-target="#deleteUser"> Excluir
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">MAT - 002</th>
                        <td><input type="text" class="form-control" value="André Luis Rodrigues" readonly="readonly"
                                   disabled="disabled"></td>
                        <td><input type="text" class="form-control" value="031.064.845-22" readonly="readonly"
                                   disabled="disabled"></td>
                        <td>
                            <button type="button" onclick="edit_user()" id="btnCadUser" class="btn btn-warning"><i
                                    class="fas fa-users"></i>Editar
                            </button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger" data-toggle="modal"
                                    data-target="#deleteUser"> Excluir
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">MAT - 003</th>
                        <td><input type="text" class="form-control" value="Josilene da Silva" readonly="readonly"
                                   disabled="disabled"></td>
                        <td><input type="text" class="form-control" value="161.004.705-22" readonly="readonly"
                                   disabled="disabled"></td>
                        <td>
                            <button type="button" onclick="edit_user()" id="btnCadUser" class="btn btn-warning"><i
                                    class="fas fa-users"></i>Editar
                            </button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger" data-toggle="modal"
                                    data-target="#deleteUser"> Excluir
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
