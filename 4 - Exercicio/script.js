
  window.onload = function() {
    
    let naoPreenchido = false;
    if (localStorage.getItem("nome") ?  incluiNome() : naoPreenchido = true );
    if (localStorage.getItem("cor") ? incluiCor() : naoPreenchido = true );    
    if (localStorage.getItem("idade") ? incluiIdade() : naoPreenchido = true );
    if (localStorage.getItem("cidade") ? incluiCidade() : naoPreenchido = true );    

    if (naoPreenchido)
        document.getElementById("naoPreenchido").style.display ='block';
};

function incluiNome() {
    document.getElementById("nome1").innerHTML = localStorage.getItem("nome")
    document.getElementById("nome").value = localStorage.getItem("nome")
}

function incluiIdade() {
    document.getElementById("idade1").innerHTML = localStorage.getItem("idade")
    document.getElementById("idade").value = localStorage.getItem("idade")
}

function incluiCor() {
    document.body.style.backgroundColor = localStorage.getItem("cor")
    document.getElementById("cor").value = localStorage.getItem("cor")
}

function incluiCidade() {
    document.getElementById("cidade1").innerHTML = localStorage.getItem("cidade") // Código html
    document.getElementById("cidade").value = localStorage.getItem("cidade") 
}

function SalvarInf() {
    localStorage.setItem("nome",document.getElementById("nome").value);
    localStorage.setItem("cor",document.getElementById("cor").value);
    localStorage.setItem("idade",document.getElementById("idade").value);
    localStorage.setItem("cidade",document.getElementById("cidade").value); 
 }

 