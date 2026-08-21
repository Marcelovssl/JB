var primeiroNome = prompt("Qual o seu primeiro nome?");
var sobrenome = prompt("Qual o seu sobrenome?");
var nomeCompleto = primeiroNome + " " + sobrenome;
var n = parseInt(prompt("Quantas vezes deseja exibir o nome?"));
var cor = prompt("Qual cor voce deseja ver no nome?");
for (var i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        document.write("<p style='color:black;'>" + i + " - " + nomeCompleto + "</p>");
    } else {
        document.write("<p style='color:" + cor + ";'>" + i + " - " + nomeCompleto + "</p>");
    }
}
 
