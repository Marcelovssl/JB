document.getElementById("btnPlay").addEventListener("click", play);
document.getElementById("btnPause").addEventListener("click", pause);
document.getElementById("btnStop").addEventListener("click", stop);
document.getElementById("btnSair").addEventListener("click", sair);
document.getElementById("nroAleatorio").addEventListener("click", clicarNumero);
document.getElementById("formLogin").addEventListener("submit", entrar);
document.getElementById("formCadastro").addEventListener("submit", cadastrar);
document.getElementById("btnIrCadastro").addEventListener("click", mostrarCadastro);
document.getElementById("btnIrLogin").addEventListener("click", mostrarLogin);
function getUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}
function mostrarMensagem(id, texto, tipo) {
    let msg = document.getElementById(id);
    msg.innerHTML = texto;
    msg.className = "mensagem " + tipo;
}
function mostrarLogin() {
    document.getElementById("formCadastro").classList.add("oculto");
    document.getElementById("formLogin").classList.remove("oculto");
}
function mostrarCadastro() {
    document.getElementById("formLogin").classList.add("oculto");
    document.getElementById("formCadastro").classList.remove("oculto");
}
function cadastrar(event) {
    event.preventDefault();
    let nome = document.getElementById("cadNome").value.trim();
    let email = document.getElementById("cadEmail").value.trim();
    let usuario = document.getElementById("cadUsuario").value.trim();
    let senha = document.getElementById("cadSenha").value;
    let confirma = document.getElementById("cadConfirma").value;
    if (nome == "" || email == "" || usuario == "" || senha == "" || confirma == "") {
        mostrarMensagem("msgCadastro", "Preencha todos os campos.", "erro");
        return;
    }
    if (senha.length < 4) {
        mostrarMensagem("msgCadastro", "A senha precisa ter no mínimo 4 caracteres.", "erro");
        return;
    }
    if (senha != confirma) {
        mostrarMensagem("msgCadastro", "As senhas não conferem.", "erro");
        return;
    }
    let usuarios = getUsuarios();
    if (usuarios.some(u => u.usuario.toLowerCase() == usuario.toLowerCase())) {
        mostrarMensagem("msgCadastro", "Esse usuário já existe.", "erro");
        return;
    }
    usuarios.push({ nome, email, usuario, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    document.getElementById("formCadastro").reset();
    document.getElementById("loginUsuario").value = usuario;
    mostrarMensagem("msgCadastro", "", "");
    mostrarMensagem("msgLogin", "Cadastro realizado! Faça o login.", "sucesso");
    mostrarLogin();
}
function entrar(event) {
    event.preventDefault();
    let usuario = document.getElementById("loginUsuario").value.trim();
    let senha = document.getElementById("loginSenha").value;
    let encontrado = getUsuarios().find(u => u.usuario.toLowerCase() == usuario.toLowerCase() && u.senha == senha);
    if (encontrado == undefined) {
        mostrarMensagem("msgLogin", "Usuário ou senha incorretos.", "erro");
        return;
    }
    sessionStorage.setItem("usuarioLogado", encontrado.usuario);
    abrirJogo(encontrado);
}
function abrirJogo(usuario) {
    document.getElementById("nomeUsuario").innerHTML = usuario.nome.split(" ")[0];
    document.getElementById("telaAcesso").classList.add("oculto");
    document.getElementById("telaJogo").classList.remove("oculto");
}
function sair() {
    stop();
    sessionStorage.removeItem("usuarioLogado");
    document.getElementById("formLogin").reset();
    mostrarMensagem("msgLogin", "", "");
    document.getElementById("telaJogo").classList.add("oculto");
    document.getElementById("telaAcesso").classList.remove("oculto");
    iniciarAcesso();
}
function iniciarAcesso() {
    let usuarios = getUsuarios();
    let logado = sessionStorage.getItem("usuarioLogado");
    let usuario = usuarios.find(u => u.usuario == logado);
    if (usuario != undefined) {
        abrirJogo(usuario);
    } else if (usuarios.length == 0) {
        mostrarCadastro();
    } else {
        mostrarLogin();
    }
}
function getTempo() {
    let dificuldade = document.getElementById("dificuldade").value;
    if (dificuldade == "1300") {
        return tempoFacil;
    } else if (dificuldade == "650") {
        return tempoMedio;
    } else {
        return tempoDificil;
    }
}
function play() {
    if (intervalo == null) {
        if (tempoRestante == null) {
            novaPartida();
        }
        intervalo = setInterval(trocarNumero, document.getElementById("dificuldade").value);
        cronometro = setInterval(contarTempo, 1000);
    }
}
function novaPartida() {
    zerarPlacar();
    tempoRestante = getTempo();
    document.getElementById("contTempo").innerHTML = tempoRestante;
    document.getElementById("boxResultado").classList.add("oculto");
    document.getElementById("boxNroAleatorio").classList.remove("oculto");
}
function contarTempo() {
    tempoRestante--;
    document.getElementById("contTempo").innerHTML = tempoRestante;
    if (tempoRestante <= 0) {
        fimDePartida();
    }
}
function fimDePartida() {
    pararRelogios();
    tempoRestante = null;
    nroAtual = null;
    document.getElementById("resAcertos").innerHTML = acertos + "/" + passaram;
    document.getElementById("resErros").innerHTML = "Erros: " + erros;
    document.getElementById("boxNroAleatorio").classList.add("oculto");
    document.getElementById("boxResultado").classList.remove("oculto");
}
function trocarNumero() {
    let nro = parseInt(Math.random()*100)+1;
    let elemento = document.getElementById("nroAleatorio");
    nroAtual = nro;
    jaClicou = false;
    elemento.className = "";
    elemento.innerHTML = nro;
    if (nro % 2 == 0) {
        passaram++;
        document.getElementById("contPassaram").innerHTML = passaram;
    }
}
function clicarNumero() {
    if (intervalo == null || nroAtual == null || jaClicou) {
        return;
    }
    jaClicou = true;
    let elemento = document.getElementById("nroAleatorio");
    if (nroAtual % 2 == 0) {
        acertos++;
        document.getElementById("contAcertos").innerHTML = acertos;
        elemento.className = "acertou";
    } else {
        erros++;
        document.getElementById("contErros").innerHTML = erros;
        elemento.className = "errou";
    }
}
function pararRelogios() {
    clearInterval(intervalo);
    clearInterval(cronometro);
    intervalo = null;
    cronometro = null;
}
function zerarPlacar() {
    passaram = 0;
    acertos = 0;
    erros = 0;
    document.getElementById("contPassaram").innerHTML = 0;
    document.getElementById("contAcertos").innerHTML = 0;
    document.getElementById("contErros").innerHTML = 0;
}
function pause() {
    pararRelogios();
}
function stop() {
    pararRelogios();
    tempoRestante = null;
    nroAtual = null;
    jaClicou = false;
    zerarPlacar();
    document.getElementById("contTempo").innerHTML = "_";
    document.getElementById("nroAleatorio").className = "";
    document.getElementById("nroAleatorio").innerHTML = "_";
    document.getElementById("boxResultado").classList.add("oculto");
    document.getElementById("boxNroAleatorio").classList.remove("oculto");
}
const tempoFacil = 100;
const tempoMedio = 100;
const tempoDificil = 100;
let intervalo = null;
let cronometro = null;
let tempoRestante = null;
let nroAtual = null;
let jaClicou = false;
let passaram = 0;
let acertos = 0;
let erros = 0;
iniciarAcesso();
