// Trabajar con arrays
// Pueden llevar todo tipo de datos(numeros, strings, booleanos, objetos, variables.. etc)
let lista = [1, 2, 3, 4, 5, 6];
let var1 = '45';

let lista2 = [1, true, "Hola", {id: 3}, var1, null, undefined];

console.log(lista2)

// Acceder a los valores de un array a trves de su posicion
// Se utilizan corchetes [] y el indice es 0

console.log(lista2[0]);
console.log(lista2[1]);
console.log(lista2[2]);
console.log(lista2[3]);

// Metodos para introducir nuevos valores en arrays
//.push() y .unshift() => cambian las posiciones de los elementos

// .push => Agregar al final

lista2.push('Adios', 38);

console.log(lista2);

// .unshift => Agrega al principio

lista2.unshift('Juan');

console.log(lista2);

// Metodos para eliminar valores de un array
// .pop() y shift() => Cambian las posiciones de los elementos

const lista3 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// .pop() => Valores al final

lista3.pop();
console.log(lista3);

// .shift() => Valores al principio

lista3.shift();
console.log(lista3);

// Metodo para eliminar, modificar y agregar valores a un array
// .splice(x, y, z)

const lista4 = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];

// Eliminar valores con .splice(numIndice, numValoresABorrar)
lista4.splice(3, 2);

console.log(lista4);

// Agregrar valores con .splice(numIndice, 0, valoresAAgregar)

lista4.splice(3, 0, "4","5");

console.log(lista4);

// Modificacion de valores con .splice(numIndice, 1, ValorAAgregar)

lista4.splice(3, 2, "cuatro","cinco");
console.log(lista4);