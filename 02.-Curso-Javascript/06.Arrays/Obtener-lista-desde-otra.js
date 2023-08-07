// Metodo .slice()
// No modifica el valor del array original

const lista1 = ["Hola", 1, 2, 3, true, null, "Adios"];
const lista2 = lista1.slice(1, 4);

console.log(lista2);
console.log(lista1.slice(1, -1));
