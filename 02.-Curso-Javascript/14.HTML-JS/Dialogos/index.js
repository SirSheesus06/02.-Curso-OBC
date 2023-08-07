const boton = document.querySelector("#btn")

boton.addEventListener("click", ()=> {
    //alert("Se ha hecho click!")
    //confirm("Estas de acuerdo?")
        //? console.log("OK")
        //: console.log("Cancel")
    const answer = confirm("Estas de acuerdo?")
        if(answer) {
            console.log("De acuerdo, bienvenido")
            //alert("Bienvenido")
        }
        else {
            console.log("Vuelve pronto")
            //alert("Adios!!")
        }
})

const botonInfo = document.querySelector("#btn-info")
botonInfo.addEventListener("click", ()=>{
    const nombre = prompt("Cual es tu nombre?")
    if (nombre) {
        alert(`Bienvenido ${nombre}`)
    } else {
        alert("Adios!!")
    }
})

const lista = [
    {nombre: "Juan", edad: 33},
    {nombre: "Agos", edad: 32},
    {nombre: "Emilia", edad: 8},
    {nombre: "Martina", edad: 5},
]

console.table(lista)