// Metodos de arrays avanzados
// .map() .filter() .reduce()

// .map()

const ciudades = ["Zárate", "Campana", "Escobar", "Baradero", "Lima"];

const newCities = ciudades.forEach(valor => {
    console.log(valor);
})
// Devuelve undefined, no asigna los valores
console.log(newCities);

const nuevasCiudades = ciudades.map((valor, indice) => `0${indice +1} - ${valor}`);
// Asigna el valor del indice a la variable indice
// Asigna el valor de valor a su variable

console.log(nuevasCiudades);

// .filter()

const personas = [
    {nombre: "Juan", edad: 32},
    {nombre: "Agostina", edad: 32},
    {nombre: "Emilia", edad: 8},
    {nombre: "Martina", edad: 5},
    {nombre: "Negra", edad: 7},
    {nombre: "Popi", edad: 3}
]

//const persMayores = personas.filter( obj => {
//    if(obj.edad > 18) {
//        return true;
//    }
//    else {
//        return false;
//    }
//});

//console.log(persMayores)

const persMayores = personas.filter(obj => obj.edad >18);

console.log(persMayores);

const nuevaLista = personas.filter( obj => obj.nombre !== "Juan");
console.log(nuevaLista);

// .reduce()

const numEnteros = [ 3, 53, 23, 5, 90, 100];

const suma = numEnteros.reduce((acumulado, current, index, arrayOriginal) => {
    console.log(acumulado)
    console.log(current)
    console.log(index)
    console.log(arrayOriginal)

    return acumulado + current;
})

console.log(suma)