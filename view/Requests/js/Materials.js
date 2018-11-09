 // url = "http://localhost:8080/api/materials";
 function getMaterials() {
     // let inputCep = document.querySelector('input[name=cep]');
     let cep = inputCep.value.replace('-', '');
     let url = 'http://localhost:8080/api/materials';
     let xhr = new XMLHttpRequest();
     xhr.open('GET', url, true);
     xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {
             if (xhr.status = 200)
                 preencheCampos(JSON.parse(xhr.responseText));
         }
     }
     xhr.send();
 }
 function preencheCampos(json) {
     document.querySelector('input[name=id_materials]').value = json.logradouro;
     document.querySelector('input[name=desc_material]').value = json.bairro;
     document.querySelector('input[name=price]').value = json.complemento;
     document.querySelector('input[name=point_value]').value = json.localidade;
}