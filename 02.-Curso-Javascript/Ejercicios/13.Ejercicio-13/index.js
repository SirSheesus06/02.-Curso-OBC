
let nombres = "Juan Manuel"
let apellido = "Vivas"

// Concatenar las variables nombres y apellido

let estudiante = nombres.concat(" ", apellido)

// Transformar variable estudiante a mayuscula

let estudianteMayus = estudiante.toUpperCase()

console.log(estudianteMayus)

// Transformar variable estudiante a minuscula
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

// Saber la longitud de la variable estudiante

let estudianteCont = estudiante.length
console.log(estudianteCont)
// Primera letra de la variable nombres

let firstLet = nombres.charAt(0)
console.log(firstLet)
// Ultima letra de la variable apellido

let lastLet = apellido.slice(-1)
console.log(lastLet)
// Quitar todos los espacios de la variable estudiante

let spaceOff = estudiante.replace(/\s+/g, "")
console.log(spaceOff)
// Buscar en la variable estudiante si se uso la variable nombre

let nameCheck = estudiante.includes(`${nombres}`)
console.log(nameCheck)