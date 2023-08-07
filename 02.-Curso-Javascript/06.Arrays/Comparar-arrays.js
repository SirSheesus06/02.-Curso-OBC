// Comparar arrays

// .every()

const numeros = [4, 5, 6, 9, 1, -5, -9, -3, 2 , -1];

// nuevos = numeros.every(valor => {
//    if (valor > 0) {
//        return true;
//    } else {
//        return false;
//    }
//})

const nuevos = numeros.every(valor => valor > 0)
console.log(nuevos);

// Comparacion de listas

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

console.log(arr1 === arr2);

const compararArrays = (arr_1, arr_2) => {
    if(arr_1.length !== arr_2.length) return false
    const res = arr_1.every((valor, index) => valor === arr_2[index])
    return res
}

console.log(compararArrays(arr1, arr2));

const arr3 = [1, 2, 3, 6];

console.log(compararArrays(arr1, arr3));