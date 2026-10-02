var usuarios = [
    { nomeUsuario: "wilton123", senha: "senha123" },
    { nomeUsuario: "maria456", senha: "senha456" },
    { nomeUsuario: "joao789", senha: "senha789" }
];

localStorage.setItem("usuarios", JSON.stringify(usuarios));

document.getElementById("mensagem").innerHTML =
    "Usuários cadastrados com sucesso! Total: " + usuarios.length;
