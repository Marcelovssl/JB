alert("Olá, seja bem-vindo!");

var nomeCompletoInput = document.getElementById("nomeCompleto");
var btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", function () {
    var nomeCompleto = nomeCompletoInput.value.trim();

    if (nomeCompleto === "") {
        alert("Por favor, informe seu nome completo.");
        return;
    }

    var palavras = nomeCompleto.split(" ").filter(function (palavra) {
        return palavra !== "";
    });

    if (palavras.length < 2) {
        alert("Por favor, informe NOME + SOBRENOME.");
        return;
    }

    localStorage.setItem("nomeCompleto", nomeCompleto);
    window.location.href = "menu.html";
});