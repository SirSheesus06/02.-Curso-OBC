// Operador .valueOf() - Obtener valores numericos a partir de literales

let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
// Obtener numero primitivo(valor numerica de la variable)
console.log(b.valueOf());
console.log(a.valueOf() + b.valueOf());

// Not a Number(NaN) - Infinity

let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor2);

// Convertir strings a valores numericos con Numbers, parseInt y parseFloat

let numS = '5.89';
let numN = 16.5;

console.log(typeof numS);
// Pasar STRING a numero con NUMBER()
console.log(Number(numS) + numN);

let num1 = '34.56';
let num2 = parseInt(num1); // Lo pasa a entero sin decimales
let num3 = parseFloat(num1); // Lo pasa a numero con decimales

console.log(num2);
console.log(num3);

// Numeros hexadecimales(base 16)

let numHex = '0x3a5b7';
// Paser de hexadecimal a numero, siempre con parseInt
console.log(parseInt(numHex, 16));

// Como obtener los valores maximos y minimos en JS

// Number. tiene varias funciones disponibles

let minPrecision = Number.EPSILON;
let minValorJS = Number.MIN_VALUE;
let maxValorJS = Number.MAX_VALUE;

console.log(minPrecision);
console.log(minValorJS);
console.log(maxValorJS);