window.onload = function() { // Quando a página for carregada

    document.getElementById("memoria").innerHTML = navigator.deviceMemory;
   //document.getElementById("conexao").innerHTML = navigator.onLine;
    let conexao = document.getElementById("conexao");
    if (navigator.onLine ? conexao.innerHTML = "Conectado" : conexao.innerHTML = "Desconectado");

    document.getElementById("linguagem").innerHTML = navigator.language;
    document.getElementById("UserAgent").innerHTML = navigator.userAgent;
};