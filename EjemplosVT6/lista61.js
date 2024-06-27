//Ejercicio 1 Crea una clase Tarea
class Tarea{
    constructor(id, descripcion) {
        this.id =id;
        this.descripcion =descripcion;
        this.completada=false;
    }
}

//Crear un Array de Tareas
const listaDeTareas=[
    new Tarea(1, "Hacer la compra"),
    new Tarea(2, "Estudiar para el examen"),
    new Tarea(3, "Llamar al médico"),
];

//Crear una Funcion para Mostrar Tareas
function mostrarTareas(){
    const listaDeTareasElement = document.getElementById("tareas-lista");
    listaDeTareasElement.innerHTML= ''; //Limpia la lista antes de mostrar las tareas nuevamente

    for (let i = 0; i<listaDeTareas.lenght; i++){
        const tarea =listaDeTareas[i];
        const tareaElement = document.createElement("li");
        tareaElement.innerHTML =
        'Tarea' + tarea.id + ':' +tarea.descripcion + '(Completada:'+ tarea.completada + ') '+
        '<button onclick="marcarTareaComoCompletada (' + tarea.id + ') ">Marcar como completada</botton>' +
        '<button onclick="eliminarTarea(' + tarea.id +')">Eliminar</button>';

        listaDeTareasElement.appendChild(tareaElement);
    }
}

//Crea una funcion para Agregar Tareas
function agregarTarea(){
    var descripcion = document.getElementById('descripcion-tarea');
    var id = listaDeTareas.length + 1;
    const nuevaTarea= new Tarea(id,descripcion);
    listaDeTareas.push(nuevaTarea);
    mostrarTareas();
}

//Crea una Funcion para Marcar Tareas como completadas
function marcarTareaComoCompletada(id){
    const tarea = listaDeTareas.find((t) => t.id === id);
    if(tarea){
        tarea.completada=true;
    }
    mostrarTareas();
}


function eliminarTarea(id){
    const index = listaDeTareas.findIndex((t) => t.id === id);
    if(index !== -1) {
        listaDeTareas.splice(index, 1);
    }
    mostrarTareas();
}

