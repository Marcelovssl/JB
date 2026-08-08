var nota1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));
 
var nota2 = parseFloat(prompt("Digite a nota do 2º bimestre:"));
 
var soma = nota1 + nota2;
 
if (soma >= 60) {
    alert("Parabéns! Você foi APROVADO(A) na disciplina. Soma das notas: " + soma);
} else {
    var pontosFaltantes = 60 - soma;
    alert("Você foi REPROVADO(A) na disciplina. Faltaram " + pontosFaltantes + " ponto(s) para aprovação.");
}