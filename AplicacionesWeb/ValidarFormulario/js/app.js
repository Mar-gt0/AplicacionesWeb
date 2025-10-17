let enviar = document.getElementById("enviar");

function validarFormulario(){
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let fechaNaci = document.getElementById("fechaNaci").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let  terminos = document.querySelector("input[name='terminos']");
    let mostrarValidacion = document.getElementById("mostrarValidacion");

    if(!nombre && !apellido && !genero && !terminos.checked){
        mostrarValidacion.innerHTML = "<p>Todos los campos estan vacios.</p>";
    }else if(!nombre){
        mostrarValidacion.innerHTML = "<p>El campo de nombre esta vacio.</p>";
    }else if(!apellido){
        mostrarValidacion.innerHTML = "<p>El campo de apellido esta vacio.</p>";
    }else if(!fechaNaci){
        mostrarValidacion.innerHTML = "<p>El campo de fecha de nacimiento esta vacio.</p>";
    }else if(!genero){
        mostrarValidacion.innerHTML = "<p>El campo de genero esta vacio.</p>";
    }else if(!terminos.checked){
        mostrarValidacion.innerHTML = "<p>El campo de termino esta vacio.</p>";
    }else{
        mostrarValidacion.innerHTML = "<p>Todos los campos tienen contenido.</p>";
    }
}

enviar.addEventListener("click", validarFormulario);