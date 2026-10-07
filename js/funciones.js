function apagarAmpolleta() {
  document.getElementById("ampolleta").src = "../img/apagada.jpg";
}
function encenderAmpolleta() {
  document.getElementById("ampolleta").src = "../img/encendida.jpg";
}
function sumar() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}
function restar() {
   let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}
function multiplicar() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 * num2;
  document.getElementById("resultado").value = resultado;
}
function dividir() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 / num2;

  document.getElementById("resultado").value = resultado;
}
