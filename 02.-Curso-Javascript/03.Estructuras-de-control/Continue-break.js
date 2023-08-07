// Casos muy especificos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for ( let i = 0; i < lista.length; i++) {
    console.log(lista[i]);

    if(lista[i] === 3) {
        continue;
    }

    if(lista[i] > 5) {
        break;
    }
    console.log(lista[i]);
}

// Cual es el ambito de un bucle
console.log(i);