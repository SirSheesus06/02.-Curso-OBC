// Funciones asincronas y promesas

function miAsinc() {
    // Llama a una base de datos externa
    // Puede darnos algun error
}

// Si esta correcta la llamada, devuelve resolve
// Si da error, reject
const miPromesa = new Promise((resolve, reject) => {
    // Ejercicio que devuelve un num aleatorio entre 0 y 2
    const i = Math.floor(Math.random() * 2)
    console.log(i)

    if(i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
// .then() es para devolver correcto
    .then(() => console.log("Este proceso se completo correctamente"))
// .catch() es para cuando hay error
    .catch(() => console.log("Error"))
// .finally() se ejecuta siempre, independientemente de como sea el resultado
    .finally(() => console.log("Finally se ejecuta siempre"))