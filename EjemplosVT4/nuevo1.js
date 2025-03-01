function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var botonPulsar = document.getElementById('pulsar');
var inputValor = document.getElementById('valor');


botonPulsar.addEventListener('click', function() {
    
    var numero = inputValor.value;
    var lista = document.createElement("ul");
    
    for (var i = 0; i < numero; i++) {
        var numeroAleatorio = generarNumeroAleatorio(1, 100); 
        var elementoLista = document.createElement('li');
        elementoLista.textContent = numeroAleatorio;
        lista.appendChild(elementoLista);
    }
    var listaContainer = document.getElementById('listaContainer');
    listaContainer.innerHTML = ''; 
    listaContainer.appendChild(lista);
});

var botonColorear = document.getElementById('colorear');

botonColorear.addEventListener('click', function() {
    var elementosLista = document.querySelectorAll("li");

    for (var i = 0; i < elementosLista.length; i++) {
        var numero = parseInt(elementosLista[i].textContent);
        if (numero % 2 === 0) {
            elementosLista[i].style.backgroundColor = "red";
        }
    }
});