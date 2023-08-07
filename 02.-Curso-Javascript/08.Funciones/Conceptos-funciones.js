// Funciones. Que son, como se declaran y sus caracteristicas

// Funcion para saludar
saludar("Juan"); // Paso el parametro que pide la funcion

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

// Al pasar el solo el valor, luego de llamar a la funcion, en la variable no cambie
let nombre_2 = "Manuel";
console.log(nombre_2);

despedir(nombre_2);

console.log(nombre_2); // Mantiene su valor

function despedir(nombre) {
    nombre = "Carlos";
    console.log(`Adios ${nombre}`);
}

// Otro ejemplo, pero que si cambia su valor
// Y es al utilizar Objetos

const nombrePersona = {nombre: "Juan", apellido: "Vivas"}
console.log(nombrePersona); // Mantiene su valor

saludarPersona(nombrePersona);
console.log(nombrePersona); // Despues de ejecutar la funcion cambia su valor

function saludarPersona(objeto) {
    objeto.apellido = "Wysocki"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
    // Utiliza el valor declarado dentro de la funcion
}

// Parametros por defecto

imprimeNumero();
imprimeNumero(7);
// Si al llamar a la funcion no defino el parametro, el parametro por defecto sera utilizado

function imprimeNumero(numero = 0) {
    console.log(numero);
}

// Usar factor de propagacion como parametro
// Lo transforma en array

imprimir(1, 2, 3, 4, 5, "hola", {id: 8});

function imprimir(...param) {
    console.log(param);
}

// Usar return para devolver algo

function suma(...nums) {
    return nums.reduce((a, b) => a + b);
}

const s = suma(1, 3, 5, 7, 9, 11);
console.log(s);

function multiplicar(a = 0, b = 0) {
    return a * b
}

console.log(multiplicar(5, 8));