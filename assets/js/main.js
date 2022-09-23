$(document).ready(function(){
     $("h2").click(function(){
        $(this).css({
        })
    })

    $("h1").hover(function(){
        $(this).hide("slow")
    })


//toogle de la carta
$(".card-title").click(function(){
$(".card-text").toggle ();

})

//prueba alerta
$("#enviar").click(function(){
    alert("El correo fre enviado correctamente...");

});



    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

})