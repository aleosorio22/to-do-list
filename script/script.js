//INICIALIZAR VARIABLES
const addButton = document.getElementById("add-item")
const list = document.querySelector(".list-back-container ul")


function addTask(){
    const taskName = document.getElementById("new-task").value.trim();

    if (taskName !== "") {
        // Crear un nuevo elemento de lista <li>
        const newTaskItem = document.createElement("li");
        newTaskItem.classList.add("item");

        // Crear un checkbox para marcar la tarea como completada
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        // Crear un span para mostrar el nombre de la tarea
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskName;

        // Crear un botón para eliminar la tarea
        const deleteLink = document.createElement("a");
        deleteLink.classList.add("btn-trash");
        const trashIcon = document.createElement("i");
        trashIcon.classList.add("bi", "bi-trash3-fill");
        deleteLink.appendChild(trashIcon);

        // Agregar los elementos al nuevo elemento de lista <li>
        newTaskItem.appendChild(checkbox);
        newTaskItem.appendChild(taskSpan);
        newTaskItem.appendChild(trashIcon);

        // Agregar el nuevo elemento de lista <li> a la lista existente
        list.appendChild(newTaskItem);

        // Limpiar el valor del input después de agregar la tarea
        document.getElementById("new-task").value = "";
    }
}

addButton.addEventListener("click", addTask)
function deleteTask(event) {
    // Obtener el elemento de lista padre de la tarea
    const listItem = event.target.closest("li");

    // Eliminar la tarea del DOM si se encontró un elemento de lista
    if (listItem) {
        listItem.remove();
    }
}

// Asociar la función deleteTask al evento de clic en los íconos de eliminar
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("bi-trash3-fill")) {
        deleteTask(event);
    }
});