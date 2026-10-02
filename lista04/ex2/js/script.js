localStorage.setItem("nomeUsuario", "wilton123");
localStorage.setItem("senha", "senha123");

document.getElementById("mensagem").innerHTML =
    "Usuário: " + localStorage.getItem("nomeUsuario") + "<br>" +
    "Senha: " + localStorage.getItem("senha");
