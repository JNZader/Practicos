function calcularDiasVividos(){
    var nombre=prompt("ingresa tu nombre:");
    var edad=parseInt(prompt("ingresa tu edad"));

    if(!isNaN(edad)){
        var diasVividos=edad*365;
        alert(nombre+" has vivido "+diasVividos+" dias!!");
    }else{
        alert("ingresa una edad valida");
    }
}