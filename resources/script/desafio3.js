const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

event.preventDefault();
const numero1 = Number(document.getElementById("numero1").value);
const numero2 = Number(document.getElementById("numero2").value);
const resultado = document.getElementById("resultado");

if (numero1 > numero2) {

resultado.textContent = "O primeiro número é o maior: " + numero1;

} else if (numero2 > numero1) {
resultado.textContent = "O segundo número é o maior: " + numero2;

} else {

resultado.textContent = "Os dois números são iguais!";

}
});