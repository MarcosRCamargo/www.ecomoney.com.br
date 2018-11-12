  <div class="bg-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="tab-pane" id="tadcadUser" role="tabpanel">
            <h4 class="mb-3 text-center">
              <b class="">Dados de Usuário</b><br></h4>
            <div class="col-md-12 order-md-1">
              <form class="needs-validation" novalidate="">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">Nome</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="Marocos Rubens de Camargo" required="" disabled="disabled">
                    <div class="invalid-feedback"> Valid first name is required. </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label>CPF</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="360.648.458-56" required="" disabled="disabled">
                    <div class="invalid-feedback"> CPF é obrigatório </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="username">E-mail</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="E-mail" required="" value="marcos.marrize@gmail.com" disabled="disabled">
                    <div class="invalid-feedback" style="width: 100%;"> O campo de e-mail é obrigatório. </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email">Senha</label>
                  <input type="password" class="form-control" id="email" placeholder="Senha" required="required" disabled="disabled">
                  <div class="invalid-feedback"> Por favor informe um endereço de e-mail válido.</div>
                </div>
                <hr class="mb-4">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Foto do Perfil</span>
                  </div>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="inputGroupFile01" disabled="disabled">
                    <label class="custom-file-label" for="inputGroupFile01" disabled="disabled">Photo.jpg</label>
                  </div>
                </div>
                <hr class="mb-4">
                <button onclick="edit_user()" class="btn btn-block btn-primary">Editar</button>
                <hr class="mb-4">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>