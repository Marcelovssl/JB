var texto = prompt("Digite um texto:");
var letra = prompt("Digite uma letra:");
var palavras = texto.trim().split(/\s+/);
var resultado = "";
for (var i = 0; i < palavras.length; i++) {
    if (palavras[i].toLowerCase().charAt(0) === letra.toLowerCase()) {
        resultado += palavras[i] + " ";
    }
}
document.write(resultado.trim());
