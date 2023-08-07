// Funcion sin parametros que devuelva siempre true

function miFuncion() {
    if(true) {
        console.log("Hola Mundo!")
    }
}

// Funcion asincrona que tarde 5 segundos en hacer devolucion

async function tooLate() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
}

// Funcion generadora de indices pares

function* todosPares() {
    let number = 0;
    while(true) {
        number += 2;
        yield number;
    }
}

const pares = todosPares();