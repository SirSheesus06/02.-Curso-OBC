// Como saber si algunos elementos cumplen una condicion
// .some()

const numeros = [1, 3, 5, 4 , 8, 9, 6, 2, 10];

const numFind = numeros.some(valor => valor > 0);

console.log(numFind);

const existe = numeros.some(valor => valor === 11);

console.log(existe);

const personas = [
    {nombre: "Juan", edad: 32},
    {nombre: "Agostina", edad: 32},
    {nombre: "Emilia", edad: 8},
    {nombre: "Martina", edad: 5},
    {nombre: "Negra", edad: 7},
    {nombre: "Popi", edad: 3}
]

const existeEmilia = personas.some(persona => persona.nombre === "Emilia");

console.log(existeEmilia);

// Obtener una lista a partir de un objeto iterable

const strg = "Hola soy Juan";

const arStrg = Array.from(strg);

console.log(arStrg);

const set = new Set([2, 4, "Juan", 6]);

const arSet = Array.from(set);

console.log(arSet);

// Obtener array con los indices de un array

const keys = numeros.keys();

const arKeys = Array.from(keys);

console.log(arKeys);