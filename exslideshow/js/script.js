import carros from "./carro.js";

let  carroAtual = 0;
let idSlideShow;

document.getElementById("imgCarro").addEventListener("mouseenter", pauseSlideShow);
document.getElementById("imgCarro").addEventListener("mouseout", playSlideShow);
document.getElementById("tempo").addEventListener("change", function () {
    alert(document.getElementById("tempo").value);
});

function exibirCarro() {
    document.getElementById("imgCarro").src = `img/${carros[carroAtual].src}`;
    document.getElementById("nome").innerHTML = carros[carroAtual].nome;
    document.getElementById("potencia").innerHTML = carros[carroAtual].potencia;
}

function atualizarCarro() {
    if (carroAtual < carros.length - 1) carroAtual++
    else carroAtual = 0
    exibirCarro();
}

function playSlideShow() {
    idSlideShow = setInterval(atualizarCarro, 1500);
}

function pauseSlideShow() {
    clearInterval(idSlideShow)
}

function main() {
    atualizarCarro();
    playSlideShow();
}

main();
