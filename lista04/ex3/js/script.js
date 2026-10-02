var usuario = {
    nomeUsuario: "wilton123",
    senha: "senha123"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

var usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

document.getElementById("mensagem").innerHTML =
    "Usuário: " + usuarioSalvo.nomeUsuario + "<br>" +
    "Senha: " + usuarioSalvo.senha;
