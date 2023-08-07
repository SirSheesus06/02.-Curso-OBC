// Iterar los elementos de un array

// Metodo no tan eficiente

const lista = [1, 3, 5, 7, 9, 11, 13, 15, 17];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// Metodo mas eficiente .forEach()

let suma = 0;

const listaNums = [2, 4, 6, 8, 10];

listaNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})

console.log(suma);

// Buscar un valor dentro de una lista con .find()
// Busco el numero 13 en lista

const numCualq = lista.find(valor => {
    if (valor === 13) {
        return true;
    }
})

console.log(numCualq);

const personas = [
    {nombre: "Juan", edad: 32},
    {nombre: "Agostina", edad: 32},
    {nombre: "Emilia", edad: 8},
    {nombre: "Martina", edad: 5},
    {nombre: "Negra", edad: 7},
    {nombre: "Popi", edad: 3}
]

//const edadPersonas = personas.find(valor => {
//    if (valor.nombre === "Agostina") {
//        return true;
//    }
//})

//console.log(edadPersonas.edad);
// Mas Eficiente
const edadPersonas = personas.find(valor => {
    return valor.nombre === "Martina";
});

console.log(edadPersonas.edad);

// Simplificado con arrow function

const edadPersonas1 = personas.find(valor => valor.nombre === "Negra");

console.log(edadPersonas1.edad);