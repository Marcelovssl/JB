
document.getElementById("btnPlay").addEventListener("click", play);
document.getElementById("btnPause").addEventListener("click", pause);
document.getElementById("btnStop").addEventListener("click", stop);

function play() {
    if (intervalo == null) {
        intervalo = setInterval(trocarNumero, document.getElementById("dificuldade").value);
    }
}

function trocarNumero() {
    document.getElementById("nroAleatorio").innerHTML = parseInt(Math.random()*100)+1;
}

function pause() {
    clearInterval(intervalo);
    intervalo = null;
}

function stop() {
    clearInterval(intervalo);
    intervalo = null;
    document.getElementById("nroAleatorio").innerHTML = "_";
}

let intervalo = null;
