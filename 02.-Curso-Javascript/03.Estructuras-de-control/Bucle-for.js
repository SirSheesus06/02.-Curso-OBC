// Bucle For

// for (iniciacion; condicion; incremento)
for (let j = 0; j <= 10; j++) {
    console.log(j);   
}

let lista = [1, 4, 6, 2, 7, 10, 13, 5, 22];

for( let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2);
}

// For... of

for (let valor of lista) {
    console.log(valor);
}

// For Each

lista.forEach(valor => {
    console.log(valor);
});

// For... in

let persona = {
    nombre: "Juan",
    apellido: "Vivas",
    edad: "32",
    isDeveloper: true
}

for (let prop in persona) {
    console.log(prop);
    console.log(persona[prop]);
}