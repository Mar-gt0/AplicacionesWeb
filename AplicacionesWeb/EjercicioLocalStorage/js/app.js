// Captura de elementos del DOM
const nombre = document.querySelector(".nombre");
const edad = document.querySelector(".edad");
const fecha = document.querySelector(".fecha");
const btnGuardar = document.querySelector(".btnGuardar");
const saludo = document.querySelector(".saludo");


// Evento al hacer clic en el botón Guardar
btnGuardar.addEventListener("click", () => {
    const nom = nombre.value.trim();
    const eda = edad.value.trim();
    const fec = fecha.value;

    if (nom != 0 && eda != 0  && fec != 0) {
        // Guardar en localStorage
        localStorage.setItem("nom", nom);
        localStorage.setItem("edad", eda);
        localStorage.setItem("fecha", fec);

        // Actualizar saludo
        saludo.textContent = `Guardando: ${nom}, ${eda}, ${fec}`;
    } else {
        saludo.textContent = "Por favor, completa todos los campos.";
    }
});