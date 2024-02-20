function dibujarRectangulo(base, altura) {
    let resultado = "";
    for (let i = 0; i < altura; i++) {
        for (let j = 0; j < base; j++) {
            resultado += "*";
        }
        resultado += "\n";
    }
    alert(resultado);
}

let base = prompt("base del rectangulo:");
let altura = prompt("altura del rectangulo:");

dibujarRectangulo(base, altura);