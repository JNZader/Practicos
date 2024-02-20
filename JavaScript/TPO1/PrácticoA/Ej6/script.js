let texto=prompt("ingrese un texto");

let txtSeparado=texto.split(" ");

console.log("usted a ingresado el siguiente texto: "+texto);

console.log("numero de palabras: "+txtSeparado.length);
console.log("primer palabra: "+txtSeparado[0]);
console.log("ultima palabra: "+txtSeparado[txtSeparado.length-1]);
console.log("orden inverso: "+txtSeparado.reverse());
console.log("orden A-Z: "+txtSeparado.sort());
console.log("orden Z-A: "+txtSeparado.reverse());
