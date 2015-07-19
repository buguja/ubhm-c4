$(document).ready(function(){
    loadPage("#dinamic", "inicio.html");
    /*Eventos click en menu superior y menu derecho*/
    $(this).on("click", "#menu-top a, #menu-left a", function(e){
        e.preventDefault();
        loadPage("#dinamic", $(this).attr("href"));
    });
    /*Eventos click en lista acreditación*/
    $(this).on("click", "#acreditacion a", function(e){
        e.preventDefault();
        loadPage("#tramites-dinamic", $(this).attr("href"));
    })
});

/**
 * [Carga el archivo especificado en el parámetro "url", en la etiqueta especificada en el parámetro "place" ]
 * @param {[String]} place  [[Un id o clase donde cargar el archivo]]
 * @param {[String]} page [[La ruta del archivo a cargar]]
 */
function loadPage(place, url){
    $(place).load(url, function(){
        $("#calendar").datepicker({
            inline:true,
            dateFormat:"dd-mm-yy"
        });
    });
}