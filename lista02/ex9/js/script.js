var texto = prompt("Digite um texto:");
var textoNormalizado = texto.toLowerCase().split(" ").join("");
var textoInvertido = textoNormalizado.split("").reverse().join("");
if (textoNormalizado === textoInvertido) {
    alert("O texto informado é um palíndromo.");
} else {
    alert("O texto informado NÃO é um palíndromo.");
}
