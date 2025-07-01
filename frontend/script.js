let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function renderizarTareas() {
    const lista = document.createElement("listaTareas");
    lista.innerHTML = "";

    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = tarea.texto;
        if (tarea.completada)  li.classList.add("completada");

        li.addEventListener("click", () => {
            tareas[index].completada = !tarea[index].completada;
            guardarYRederizar();
        });

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.addEventListener("click", (e) => {
            e.stopPropagation();
            tareas.splice(index, 1);
            guardarYRederizar();
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function agregarTarea() {
    const input = document.getElementById("tareaInput");
    const texto = input.value.trim();
    if (texto) {
        tareas.push({ texto, completada: false });
        input.value = "";
        guardarYRederizar();
    }
}

function guardarYRederizar() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    renderizarTareas();
}


renderizarTareas();