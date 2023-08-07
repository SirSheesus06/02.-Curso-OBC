// Metodos de strings

let input = "Argentina";
let db = "argentina";

// toLowerCase - toUpperCase

let inputLow = input.toLowerCase();
let dbtoLow = db.toLowerCase();
// Original
console.log(input === db);
// Solo desde consola
console.log(input.toLowerCase === db.toLowerCase);
// Con variables nuevas
console.log(inputLow === dbtoLow);

// Concatenar cadenas de caracteres

// Opcion 1
let str1 = "Esta es la primera cadena de texto";
let str2 = "Y esta es la segunda cadena de texto";
let str3 = str1.concat(".", " ", str2);

console.log(str3);

// Opcion 2
let str4 = str1 + "." + " " +str2;

console.log(str4);

// Opcion 3

let str5 = `${str1}. ${str2}`;

console.log(str5);

// Eliminar espacios al incio o al final
// Metodo trim()

let str6 = "    Esta es una oracion con varios espacios al inicio y al final   ";
console.log(str6.length);

console.log(str6.trim());
console.log(str6.trimStart());
console.log(str6.trimStart().length);
console.log(str6.trimEnd());
console.log(str6.trimEnd().length);
console.log(str6.trim().length);

// Obtener el caracter en cierta posicion

let str7 = "hola soy el string numero 8";

console.log(str7.charAt(0).toUpperCase());
// Se puede trabajar como una lista
console.log(str7[0].toUpperCase());

// Obtener la posicion de una palabra dentro de un string

let str8 = "Mi nombre es Juan. Mi nombre completo es Juan Manuel Vivas";

console.log(str8.indexOf("Juan")); // Solo la primer instancia
console.log(str8.charAt(13));
console.log(str8.lastIndexOf("Juan")); // Solo la ultima instancia

