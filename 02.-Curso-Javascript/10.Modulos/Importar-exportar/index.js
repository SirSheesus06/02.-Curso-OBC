// Formas de importar/exportar en JS
// 1.-CommonJS -> 'require'
// 2.-Import ES& -> 'import'

// Version normal
//const moduleMath = require('./modulos/math.js');

// Version mas simplificada

const { factorial, suma} = require('./modulos/math.js')
const fact = factorial(8);
console.log(fact)

const sum = suma(123, 333);
console.log(sum);