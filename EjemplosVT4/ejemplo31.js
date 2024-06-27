// Espera a que el DOM esté completamente cargado antes de ejecutar el código JavaScript
document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al botón "Pulsar"
  var botonPulsar = document.querySelector("button");

  // Agregar un event listener para el clic en el botón "Pulsar"
  botonPulsar.addEventListener("click", function() {
    // Obtener el valor del input
    var valorInput = document.querySelector("input[name='valor']").value;
    
    // Convertir el valor a un número entero
    var cantidadElementos = parseInt(valorInput);

    // Verificar si se ingresó un número válido
    if (!isNaN(cantidadElementos) && cantidadElementos > 0) {
      // Limpiar la lista antes de generar nuevos elementos
      document.getElementById("listaNumerica").innerHTML = "";
      
      // Generar los elementos numéricos y agregarlos a la lista
      for (var i = 1; i <= cantidadElementos; i++) {
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = i;
        document.getElementById("listaNumerica").appendChild(nuevoElemento);
      }
    } else {
      alert("Por favor ingresa un número válido mayor que cero.");
    }
  });

  // Agregar funcionalidad para el botón "Colorear"
  document.getElementById("colorear").addEventListener("click", function() {
    // Aquí puedes agregar la lógica para colorear según tus necesidades
    alert("Coloreando...");
  });
});