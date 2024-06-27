$("button").click(function() {
    $.get('https://datos.madrid.es/egob/catalogo/300614-0-centros-educativos.json', function(datos) {

        console.log(datos);

        var listaEventos = datos["@graph"];

        for (var i = 0; i < listaEventos.length; i++) {
            $("p").append("<li>" + listaEventos[i]["title"] + "</li>");
        }
    });
});