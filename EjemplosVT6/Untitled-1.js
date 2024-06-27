//Ejercicio 1 Crea una clase Tarea
class Tarea{
    constructor(id, description) {
        this.id =id;
        this.description =descripcion;
        this.completada=false;
    }
}

//Crear un Array de Tareas
const listaDetareas=[
    new Tarea(1, "Hacer la compra"),
    new Tarea(2, "Estudiar para el examen"),
    new Tarea(3, "Llamar al médico"),
];