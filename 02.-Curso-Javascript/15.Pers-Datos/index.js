// Guardar datos en Local Storage

//localStorage.setItem("nombre", "Juan")
localStorage.setItem("nombre", "Juan Manuel")

// Consultar los datos de Local Storage desde la consola

//console.log(localStorage.getItem("nombre"));

// Guardar un objeto en Local Storage:

// Como string con stringify

localStorage.setItem("persona",JSON.stringify({nombre: "Juan", edad: 32}))

console.log(localStorage.getItem("persona"));

// Como objeto con parse

console.log(JSON.parse(localStorage.getItem("persona")));

// Eliminar un dato de local storage

localStorage.removeItem("nombre")

// En sesion storage se usa lo mismo solo que no queda guardado en las demas pestañas

// Trabajar con cookies

document.cookie = "nombreCookie=Juanma"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)