//Clase

const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const saludo = document.querySelector(".saludo");

//mostrar info de localStorage
const textoGuardado = localStorage.getItem("texto");
if(textoGuardado != ""){
    saludo.textContent = `Guardado: ${textoGuardado}`;
}

btnGuardar.addEventListener("click", ()=>{
const texto = nombre.value;
    if( nombre != ""){
        localStorage.setItem("texto", texto);
        saludo.textContent = `Guardado: ${texto}`;
    }
});