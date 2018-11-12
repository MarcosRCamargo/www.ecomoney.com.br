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

 // Get the modal
 var modal = document.getElementById('myModal');

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on the button, open the modal
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }