// Metodos mas utilizados con cadenas de strings

// Obtener la longitud de un string

let str1 = "Esto es una cadena de caracteres";

console.log(str1.length);

// Obtener partes de cadena de strings
// Slice()

let slice_str = str1.slice(12, 32);
console.log(slice_str);

// Substring()

let substring_str = str1.substring(12, 32);
console.log(substring_str);

// Substr()

let substr_str = str1.substr(12, 20);
// OBSOLETO!!!
console.log(substr_str);

// Reemplazar una parte del string
// Este metodo solo reemplaza la primer instacia, es decir una sola palabra
let cadena = "Mi nombre es Juan, futuro developer";
let cadenaNew = cadena.replace('Juan', 'Manuel');

console.log(cadenaNew);

let texto_largo = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."

let newTextoLargo = texto_largo.replace('Ipsum', 'Ipsummmmmm');

console.log(newTextoLargo);

// Al usar la expresion regular /g (global) reemplaza todas las instancias

let newTextoLargo2 = texto_largo.replace(/Ipsum/g, 'Ipsummmmmmmmmmmmm');

console.log(newTextoLargo2);