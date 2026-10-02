localStorage.setItem("nomeUsuario", "wilton123");

document.getElementById("mensagem").innerHTML =
    "Nome de usuário armazenado no localStorage: " + localStorage.getItem("nomeUsuario");
