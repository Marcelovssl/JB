var nomeCompleto = localStorage.getItem("nomeCompleto") || "";
var palavras = nomeCompleto.split(" ").filter(function (palavra) {
    return palavra !== "";
});

var primeiroNome = palavras[0] || "";
var ultimoNome = palavras[palavras.length - 1] || "";

document.getElementById("mensagemBoasVindas").innerHTML =
    primeiroNome + " " + ultimoNome + ", seja bem-vindo ao jogo dos Felinos!";

document.getElementById("btnConvidado").addEventListener("click", function () {
    window.location.href = "felino.html";
});