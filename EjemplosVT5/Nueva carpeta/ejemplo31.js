//Añadimos funcionalidad al primer botob
document.getElementsByTagName('buton')[0].onclick = function() {
    //Cogemos el valor del input
    let entrada = document.getElementsByTagName('input')[0].value;
    crearLista(entrada);
};
var objetivo = document.getElementById('resultado');
function crearLista(repeticiones){
    console.log("Gemero la lista");
    //Iniciamos el elemento lista.
    objetivo.innetHTML ="<ol>";
    //Creamos tantos elementos en la lista como se hayan introducido.
    for(var i =0; i<repeticiones; i++){
        //Genero un numero entero aleatorio.
        let numero = parseInt(Math.random() *10);
        //Creo el elemento
        objetivo.innerHTML += "<li>" + String(numero) + "</li>";
    }
    //Cierro la lista 
    objetivo.innerHTML+= "</ol>"
}
//Selecciono todos los elementos li creados.Tiene que definirse aqui porque hasta este momento no existen.
let elementosCreados =document.getElementsByTagName('li');

//Función que hace que si un elemento es par, le añade la clase "rojo"
function cambiaColorSiesPar(elemento) {
    if(parseInt(elemento.innerHTML)& 2==0) {
        console.log("cambia");
        elemento.classList.add("rojo");//LAs clases es una lista de valores con todas las clases que tiene un elemento
    }
}
//Recorro todos los elementos<li> y les cambia la clase si es necesario.
for(var i = o ; i<elementosCreados.length; i ++){
    cambiaColorSiesPar(elementosCreados[i]);
}

//Una vez cambiada la clase inicializamos el otro botón con una función anonima.
document.getElementById('colorear').onclick = function(){
                                      console.log("Ejecuta");
                                      //Saco en una lista todos los elementos con la clase"rojo"
                                      let listaRojos =  document.getElementsByClassName("rojo");
                                      //los recorro y les voy cambiando el fondo.
                                      for (var i = 0; i<listaRojos.length; i ++){
                                        listarojos[i].style.backgroundColor="red";
                                      }
   }