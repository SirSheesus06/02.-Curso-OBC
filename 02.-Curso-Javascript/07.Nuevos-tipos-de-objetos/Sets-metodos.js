// Set o conjuntos

const listaNum = [1, 2, 3, 4, 5, 1, 2, 3, "hola", "hola", {id: 1}, {id: 1}];

const newLista = new Set(listaNum);

console.log(listaNum);
// Los sets no pertimen terminos repetidos
// Aunque los objetos dentro de arrays pasan por referencia y no por valor
console.log(newLista);

// Metodos de conjuntos

// .add() para agregar un valor que no exista
//  si esta repetido no lo agrega

newLista.add(9);
newLista.add(2); // No lo agrega porque ya existe
newLista.add("adios");

console.log(newLista);

// .delete() elimina un elemento que tenga el conjunto

newLista.delete(3);
newLista.delete("hola");
console.log(newLista);

// .clear() Devuelve el Set vacio

//newLista.clear();
//console.log(newLista);

// .has() para saber si el Set contiene un valor
// Devuelve booleano

console.log(newLista.has("hola"));
console.log(newLista.has(4));
console.log(newLista);

// .size() Para saber el tamaño del Set

console.log(newLista.size);

// .forEach para iterar el Set

newLista.forEach(valor => {
    console.log(valor);
});

// Obtener un objeto Iterator con el metodo .value()

const itLista = newLista.values();
console.log(itLista);

// Transformar el Set en array
// sirve para tener un array de valores unicos
// Con Facotr de propagacion

const arLista = [...newLista];
console.log(arLista);