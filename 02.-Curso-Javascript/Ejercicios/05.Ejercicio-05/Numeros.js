// Ejercicio 05

// Altura en numero entero

let altura = 189;

// Altura en numero flotante

let alturaF= 1.89;

// Peso en numero flotante

let peso = 92.53;

// Altura con decimal redondeado hacia arriba

let alturaRedondeada = alturaF.toFixed(1);

// Peso redondeado hacia abajo

let pesoF = Math.floor(peso);

// Maximo valor + 1

let maxValor = Number.MAX_VALUE + 1;
let compararValor = Number.MAX_VALUE === maxValor;

// True
console.log(compararValor);