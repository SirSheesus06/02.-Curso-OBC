// Metodos de Strings 3
// https://regexr.com

let textoLargo = "Tito no es un mono cualquiera. A Tito no le gusta trepar los arboles ni le gusta comer platanos. El prefiere pasear por el bosque,oler las flores y recorrer las nueces que caen de los arboles";

// Buscar con expresiones regulares
console.log(textoLargo.match(/Tito/g));
console.log(textoLargo.match(/no/g));

// Devuelve Booleano si la palabra buscada existe

console.log(textoLargo.includes("platanos"));
console.log(textoLargo.includes("gato"));

// Si empieza con determinada palabra

console.log(textoLargo.startsWith("Tito"));
console.log(textoLargo.startsWith("gato"));

// Si termina con cierta palabra

console.log(textoLargo.endsWith("arboles"));
console.log(textoLargo.endsWith("nueces"));


