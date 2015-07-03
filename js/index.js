$(document).ready(function(){
    $("#dinamic").load("inicio.html");
    /*Eventos click en menu superior y menu derecho*/
    $(this).on("click", "#menu-top a, #menu-left a", function(e){
        e.preventDefault();
        $("#dinamic").load($(this).attr("href"));
    });
    /*Eventos click en lista acreditación*/
    $(this).on("click", "#acreditacion a", function(e){
        e.preventDefault();
        $("#tramites-dinamic").load($(this).attr("href"));
    })
});