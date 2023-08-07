// Listas, Arrays o Arreglos

const lista = [1, "hola", true, null, undefined];
const lista2 = new Array(2, "adios", false);
const lista3 = new Array(3);
lista3[0] = "Primer index";
const lista4 = [lista, lista2, lista3];


console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos

const auto = {
    largo: 5,
    ancho: 2,
    marca: "Peugeot",
    patente: "ABC123",
    deuda: true,
    accesorios: {
        llantasPl: 17,
        ancho: 185,
        talon: 70
    }
}

auto.modelo = 2006;
auto.accesorios.talon = 60;

console.log(auto.marca);
console.log(auto.accesorios.talon);

// Fechas
// Librerias de apoyo: Moment.js

const ahora = new Date();
const fecha_valores = new Date(1990, 6, 23);

console.log(ahora);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia);
console.log(mes);
console.log(anyo);
console.log(dia, mes, anyo);