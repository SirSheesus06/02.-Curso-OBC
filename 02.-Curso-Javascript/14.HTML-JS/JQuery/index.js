// Sintaxis
// $("selector").accion()

// $("h1").hide()

//$(document).ready(() => {
//
//})

$(() => {
    //$("#el-1").hide()
    $(".hide-btn").click(() => {
        console.log("Ocultando...")
        //$("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        console.log("Mostrando...")
        //$("h1").show()
        $("h1").fadeIn()
    })

    $(".show-btn").click(()=> {
        console.log("Cambio de color");
        $(".ti-color").css({color: "red"})
    })

    $(".pre-element").click(()=> {
        console.log("Añadiendo objeto al inicio");
        $("ul").prepend("<li>New Element</li>")
    })

    $(".last-element").click(()=> {
        console.log("Añadiendo objeto al iniciofinal");
        $("ul").append("<li>New Element</li>")
    })
})