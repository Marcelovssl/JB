var nomeUsuarioInput = document.getElementById("nomeUsuario");
var senhaInput = document.getElementById("senha");
var btnCadastrar = document.getElementById("btnCadastrar");
var mensagemEl = document.getElementById("mensagem");
var listaUsuariosEl = document.getElementById("listaUsuarios");

btnCadastrar.addEventListener("click", function () {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    var nomeDigitado = nomeUsuarioInput.value;

    var usuarioExistente = false;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nomeUsuario === nomeDigitado) {
            usuarioExistente = true;
            break;
        }
    }

    if (usuarioExistente) {
        mensagemEl.innerHTML = "Este nome de usuário já está cadastrado!";
    } else {
        var novoUsuario = {
            nomeUsuario: nomeDigitado,
            senha: senhaInput.value
        };

        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        mensagemEl.innerHTML = "Usuário cadastrado com sucesso!";

        nomeUsuarioInput.value = "";
        senhaInput.value = "";
    }

    listarUsuarios();
});

function listarUsuarios() {
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    var html = "";
    for (var i = 0; i < usuarios.length; i++) {
        html += "<li>Usuário: " + usuarios[i].nomeUsuario + " - Senha: " + usuarios[i].senha + "</li>";
    }
    listaUsuariosEl.innerHTML = html;
}

listarUsuarios();
