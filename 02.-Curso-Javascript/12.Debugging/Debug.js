// TODO Debuggear codigo

const persona = {
    nombre: "Juan",
    edad: 32
}

console.log(persona);

function dobleEdad(edad) {
    return edad * 2;
}

const obtenEdad = dobleEdad(persona.edad)

console.log(obtenEdad);


function obtenArray(edad) {
    let arrayNums = []

    for (i = 0; i < 10; i++) {
    const numero = edad + 1
    console.log(numero)
    arrayNums = [...arrayNums, numero]
    return arrayNums
    }
}

const array = obtenArray(persona.edad)

console.log(array);