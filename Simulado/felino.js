var nomeCompleto = localStorage.getItem("nomeCompleto") || "";
var primeiroNome = nomeCompleto.split(" ")[0] || "";

document.getElementById("gato01").addEventListener("click", function () {
    alert("Oi " + primeiroNome + ", tudo bem com você?");
});

var contadorCarinhos = 0;
var contadorCarinhosEl = document.getElementById("contadorCarinhos");

document.getElementById("gato02").addEventListener("click", function () {
    contadorCarinhos++;
    contadorCarinhosEl.innerHTML = contadorCarinhos;
});

var gato03 = document.getElementById("gato03");

gato03.addEventListener("mouseover", function () {
    gato03.src = "Imagens/gato06.gif";
});

gato03.addEventListener("mouseout", function () {
    gato03.src = "Imagens/gato03.gif";
});

var gato04 = document.getElementById("gato04");
var textoGato04 = document.getElementById("textoGato04");
var textoOriginalGato04 = textoGato04.innerHTML;

gato04.addEventListener("mouseover", function () {
    textoGato04.innerHTML = "Ai, pare de fazer cócegas!";
});

gato04.addEventListener("mouseout", function () {
    textoGato04.innerHTML = textoOriginalGato04;
});

document.getElementById("btnSorte").addEventListener("click", function () {
    var numero = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numeroSorte").value = numero;
});