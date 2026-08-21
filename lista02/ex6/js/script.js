var texto = prompt("Digite um texto:");
var palavras = texto.trim().split(/\s+/);
var primeiraPalavra = palavras[0];
var ultimaPalavra = palavras[palavras.length - 1];
document.write(primeiraPalavra + " " + ultimaPalavra);
