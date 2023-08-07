// Metodo .sort() -> MODIFICA EL ORIGINAL

const numeros = [12, 4, 8, 22, 10, 2, 6, 18];

//Ordena de menor a mayor
//const newNums = numeros.sort((a, b) => {
//    if(a > b) {
//        return +1;
//    }
//    else if ( a < b) {
//        return -1;
//    }
//    else {
//        return 0;
//    }
//})

//console.log(newNums);

// Ordenar unicamente arrays numericos

const listaNums = [1, 4, 5, 8, 2, 9, 3, 0, 7, 6];

const newLista = listaNums.sort((a, b) => a - b);
// De menor a mayor (a - b)
// De mayor a menor (b - a)
console.log(newLista);

// Interesante en arrays de objetos

const personas = [
    {nombre: "Juan", edad: 32},
    {nombre: "Agostina", edad: 32},
    {nombre: "Emilia", edad: 8},
    {nombre: "Martina", edad: 5},
    {nombre: "Negra", edad: 7},
    {nombre: "Popi", edad: 3}
]

const porEdad = personas.sort((a, b) => a.edad - b.edad
);
// Ordena de menor a mayor segun propiedad "edad" del objeto "personas"
console.log(porEdad);

