// Funciones tipo flecha
// Se utilizan cuando se debe devolver un solo valor
// Se pueden usar sin la palabra reservada return y sin {}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numeros2 = numeros.map((valor) => valor * 2);
console.log(numeros2);

// Se pueden declarar asi

//const dobleDelValor = valor => {
//    return valor * 2;
//}

const dobleDelValor = valor => valor * 2;

console.log(dobleDelValor(6));
console.log(doble(6));

function doble(valor) {
    return valor * 2;
}

// Se pueden usar luego de haberlas definido
const numeros3 = numeros.map(dobleDelValor);
console.log(numeros3)