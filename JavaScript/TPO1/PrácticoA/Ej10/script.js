function validarFecha(fechaString) {
  return /^\d{2}-\d{2}-\d{4}$/.test(fechaString);
}
let fechaIngresada;

do {
  fechaIngresada = prompt("ingrese una fecha en el formato dd-mm-yyyy");
} while (!validarFecha(fechaIngresada));

let fechaSeparada = fechaIngresada.split("-");
/*
let fechaIngresadaDate = new Date(
    parseInt(fechaSeparada[2]),
    parseInt(fechaSeparada[1]) - 1,
    parseInt(fechaSeparada[0])
  );
let fechaActual=new Date();

let difMs=fechaActual-fechaIngresadaDate;

let difDias=Math.floor(difMs/(1000*60*60*24));

alert("la diferencia de dias entre la fecha ingresada y la actual es de: "+difDias+" dias");*/

alert(
  "la diferencia de dias entre la fecha ingresada y la actual es de: " +
    Math.floor(
      ((new Date() -
        new Date(
          parseInt(fechaSeparada[2]),
          parseInt(fechaSeparada[1] - 1),
          parseInt(fechaSeparada[0])
        )) /
        (1000 *
        60 *
        60 *
        24))
    ) +
    " dias!!"
);
