let validar = document.getElementById("validar");

function validarCampos(){
    let correo = document.getElementById("correo").value.trim();
    let contraseña = document.getElementById("contraseña").value.trim();
    let mostrarValidacion = document.getElementById("mostrarValidacion");

if (!correo && !contraseña) {
    mostrarValidacion.innerHTML = "<p>Ambos campos están vacíos.</p>";
  } else if (!correo) {
    mostrarValidacion.innerHTML = "<p>El de correo está vacío.</p>";
  } else if (!contraseña) {
    mostrarValidacion.innerHTML = "<p>El de contraseña está vacío.</p>";
  } else {
    mostrarValidacion.innerHTML = "<p>Ambos campos tienen contenido.</p>";
  }

}

validar.addEventListener("click", validarCampos);