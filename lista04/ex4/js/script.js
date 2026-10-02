var nomeUsuarioInput = document.getElementById("nomeUsuario");
var senhaInput = document.getElementById("senha");
var btnSalvar = document.getElementById("btnSalvar");
var mensagemEl = document.getElementById("mensagem");

btnSalvar.addEventListener("click", function () {
    var usuario = {
        nomeUsuario: nomeUsuarioInput.value,
        senha: senhaInput.value
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    mensagemEl.innerHTML = "Usuário salvo com sucesso!";
});
