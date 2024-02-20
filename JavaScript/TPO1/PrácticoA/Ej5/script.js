let numeroMaximo = 1000000;
let numeroAleatorio = Math.floor(Math.random() * numeroMaximo + 1);
let intentos = 0;

while (true) {
  var intento = prompt(
    "adivina el numero(escribe un numero entre 1 y 1.000.000):"
  );
  intentos++;
  console.log(intentos);

  var numero = parseInt(intento);
  var mensaje = isNaN(numero)
    ? "ingresa un numero valido"
    : numero < 1 || numero > 1000000
    ? "el numero debe estar entre a 1 y 1000000"
    : numero < numeroAleatorio
    ? "el numero es mayor"
    : numero > numeroAleatorio
    ? "el numero es menor"
    : "Felicidades!!! adivinaste en " + intentos + " intentos";

  alert(mensaje);

  if (mensaje.includes("adivinaste")) {
    break;
  }
}
