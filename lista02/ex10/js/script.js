var n = parseInt(prompt("Digite um valor inteiro positivo maior ou igual a 2:"));
document.write("<table border='1' cellpadding='5' style='border-collapse:collapse;'>");
document.write("<tr><th>Base decimal</th><th>Base binária</th><th>Base hexadecimal</th></tr>");
 
for (var i = 0; i <= n; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + i.toString(2) + "</td>");
    document.write("<td>" + i.toString(16) + "</td>");
    document.write("</tr>");
}
document.write("</table>");
