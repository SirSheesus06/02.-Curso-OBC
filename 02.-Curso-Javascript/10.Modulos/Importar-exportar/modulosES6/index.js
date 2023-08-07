// Sintaxis para importar en ES6

import { suma, eleva } from './modulos/math.js'

// Cuando se importa por default, la sintaxis es asi

import getAutor, { libro } from './modulos/literatura.js';

const sum = suma(5, 10);
console.log(sum);

const potencia = eleva(3, 3);
console.log(potencia);

console.log(getAutor());
console.log(libro);

// Otra manera es importando todo en un metodo
// Quedan disponibles todas las funciones y variables

// import * as modulosMath from './modulos/math.js'