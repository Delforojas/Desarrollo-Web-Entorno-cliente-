function crearLista() {
    // Obtener el campo de entrada y establecer su valor aleatorio
    var inputValor = document.querySelector('input[name="valor"]');
    var cantidadElementos = parseInt(inputValor.value);

    // Verificar si el valor de entrada es un número válido
    if (!isNaN(cantidadElementos) && cantidadElementos > 0) {
        // Limpiar resultados anteriores
        var listaResultados = document.getElementById("resultados");
        listaResultados.innerHTML = "<ul>"; // Iniciar la lista

        // Generar y mostrar X elementos aleatorios
        for (var i = 0; i < cantidadElementos; i++) {
            var numeroAleatorio = obtenerNumeroAleatorio(1, 100); // Puedes ajustar el rango de los números aleatorios aquí
            var elementoLista = document.createElement("li");
            elementoLista.textContent = numeroAleatorio;
            listaResultados.appendChild(elementoLista);
        }

        listaResultados.innerHTML += "</ul>"; // Cerrar la lista


// Evento de escucha para el clic en el botón "Pulsar"
document.querySelector('button').addEventListener('click', generarNumerosAleatorios);

// Evento de escucha para el clic en el botón "Colorear"
document.getElementById('colorear').addEventListener('click', colorearElementosPares);