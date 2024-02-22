let personas = [];

function agregarPersona() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;

  if (!isNaN(edad) && parseInt(edad) > 0) {
    let persona = {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
    };

    personas.push(persona);

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";

    actualizarTablaPersonas();
  } else {
    alert(
      "ingrese una edad valida (numero mayor que cero)"
    );
  }
}

function actualizarTablaPersonas() {
  let tbody = document.getElementById("tbodyPersonas");
  tbody.innerHTML = "";

  personas.forEach((persona) => {
    let fila = `<tr>
                                <td>${persona.nombre}</td>
                                <td>${persona.apellido}</td>
                                <td>${persona.edad}</td>
                            </tr>`;
    tbody.innerHTML += fila;
  });
}
