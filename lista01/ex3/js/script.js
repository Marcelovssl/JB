var nome = prompt("Digite seu nome completo:");
 
var idade = parseInt(prompt("Digite sua idade:"));
 
var IDADE_MINIMA = 18;
 
if (idade >= IDADE_MINIMA) {
    alert(nome + ", você já POSSUI idade para tirar carteira.");
} else {
    var anosFaltantes = IDADE_MINIMA - idade;
    alert(nome + ", você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) " + anosFaltantes + " ano(s).");
}