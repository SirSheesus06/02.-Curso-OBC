// Metodo para unir dos arrasys con .concat()

const lista1 = ["Hola", 1, false, null];
const lista2 = ["Adios", 2, true, undefined];

const lista3 = lista1.concat(lista2);

console.log(lista3);

// Unir dos arrayas con el factor de propagacion

const lista4 = [...lista1, ...lista2];
console.log(lista4);

// ERROR!!! Mal entendido el concepto de factor de propagacion

const lista5 = [lista1, lista2];
//Esto es un array de 2 elementos: 2 arrays
console.log(lista5);


