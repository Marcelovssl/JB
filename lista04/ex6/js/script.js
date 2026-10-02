var usuarios = [
    { nomeUsuario: "wilton123", senha: "senha123" },
    { nomeUsuario: "maria456", senha: "senha456" },
    { nomeUsuario: "joao789", senha: "senha789" }
];

localStorage.setItem("usuarios", JSON.stringify(usuarios));

var usuariosSalvos = JSON.parse(localStorage.getItem("usuarios"));

var listaEl = document.getElementById("listaUsuarios");
var html = "";
for (var i = 0; i < usuariosSalvos.length; i++) {
    html += "<li>Usuário: " + usuariosSalvos[i].nomeUsuario + " - Senha: " + usuariosSalvos[i].senha + "</li>";
}
listaEl.innerHTML = html;
