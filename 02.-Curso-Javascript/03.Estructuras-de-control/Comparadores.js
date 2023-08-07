// Comparaciones

// Igualdad

let a = 5;
let b = "5";

if (a == b) {
    console.log("5 es igual a 5");
}

// == compara el valor
// === compara l valor y el tipo

if (a === b) {
    console.log("5 es muy igual a 5");
}

// Desigualdad

// != compara valor
// !== compara valor y tipo

let c = 4;
let d = 9;

if (c != d) {
    console.log("Son diferentes en valor");
}

// Mayor o menor

// > mayor que
// < menor que

let max = 12;
let min = 1;

if ( max > min) {
    console.log("Mayor que");
}
else if ( max => min) {
    console.log("Mayor o igual que");
}
else if (max < min) {
    console.log("Menor que");
}
else if (max <= min) {
    console.log("Menor o igual que");
}