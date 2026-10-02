var nomeUsuarioInput = document.getElementById("nomeUsuario");
var senhaInput = document.getElementById("senha");
var btnLogin = document.getElementById("btnLogin");
var mensagemEl = document.getElementById("mensagem");

if (!localStorage.getItem("usuarios")) {
    var usuariosIniciais = [
        { nomeUsuario: "wilton123", senha: "senha123" },
        { nomeUsuario: "maria456", senha: "senha456" }
    ];
    localStorage.setItem("usuarios", JSON.stringify(usuariosIniciais));
}

btnLogin.addEventListener("click", function () {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    var nomeDigitado = nomeUsuarioInput.value;
    var senhaDigitada = senhaInput.value;

    var usuarioEncontrado = false;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nomeUsuario === nomeDigitado && usuarios[i].senha === senhaDigitada) {
            usuarioEncontrado = true;
            break;
        }
    }

    if (usuarioEncontrado) {
        mensagemEl.innerHTML = "USUÁRIO JÁ EXISTENTE";
    } else {
        mensagemEl.innerHTML = "USUÁRIO INEXISTENTE";
    }
});
