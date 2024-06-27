function incrementa(){
    //Funcion que coge el contenido del p y lo incrementa 1.
    var contenido = Number(document.getElementsByTagName("p")[0].innerHTML);
    contenido += 1;
    document.getElementsByTagName("p")[0].innerHTML = contenido;
}

//Localizamos todos los elementos button

var listaBotones = document.getElementsByTagName('button');

//Recorremos todos los elementos button y le asignamos la funcion incrementa() al 
for(var i = 0; i <listaBotones.length; i++) {
    listaBotones[i].addEventListener("click", incrementa , false)
}