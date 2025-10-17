const lista = document.getElementById("lista-tareas");
const input = document.getElementById("nueva-tarea");
const boton = document.getElementById("agregar-btn");

// cargar tareas guardadas
window.onload = () => {
  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareasGuardadas.forEach(tarea => agregarTarea(tarea.texto, tarea.completada));
};

//aagregar tarea
boton.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto !== "") {
    agregarTarea(texto, false);
    input.value = "";
    guardarTareas();
  }
});

// función para agregar tarea
function agregarTarea(texto, completada) {
  const li = document.createElement("li");
  li.textContent = texto;
  if (completada) li.classList.add("completada");

  li.addEventListener("click", () => {
    li.classList.toggle("completada");
    guardarTareas();
  });

  lista.appendChild(li);
}

// fun para guardar tareas en Local Storage
function guardarTareas() {
  const tareas = [];
  lista.querySelectorAll("li").forEach(li => {
    tareas.push({ texto: li.textContent, completada: li.classList.contains("completada") });
  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
}