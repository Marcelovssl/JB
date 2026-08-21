var nomeCompleto = prompt("Digite seu nome completo:");
var partes = nomeCompleto.trim().split(" ");
var primeiroNome = partes[0].toUpperCase();
var restante = partes.slice(1).join(" ").toLowerCase();
var resultado = restante ? primeiroNome + " " + restante : primeiroNome;
alert(resultado);
