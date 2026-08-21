var texto = prompt("Informe um texto:");
var primeiraPalavra = prompt("Informe a primeira palavra:");
var segundaPalavra = prompt("Informe a segunda palavra:");
var regex = new RegExp("\\b" + primeiraPalavra + "\\b", "g");
var textoAlterado = texto.replace(regex, segundaPalavra);
alert(textoAlterado);
