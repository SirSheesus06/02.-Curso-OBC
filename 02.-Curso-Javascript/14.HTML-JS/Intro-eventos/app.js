const form = document.getElementById("formulario")

console.log(form);

form.addEventListener( "submit", event => {
    console.log(event)
    event.preventDefault()
})