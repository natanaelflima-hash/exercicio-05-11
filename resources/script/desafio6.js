function verificar() {
var numero = document.getElementById("numero").value;
if (numero == "") {     document.getElementById("resultado").innerHTML = "Digite um número!";
} 
else if (numero % 2 == 0) {
 document.getElementById("resultado").innerHTML = "O número é par!";
} 
else {
document.getElementById("resultado").innerHTML = "O número é impar!";
}

}