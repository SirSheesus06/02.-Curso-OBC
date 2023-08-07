// Trabajando con fechas

// Fecha actual 

const fecha = new Date();
console.log(fecha);

// ATENCION !!! Los meses inician en 0 (0 - Enero, 11 - Diciembre);

const fecha1 = new Date(1990, 6, 23, 17, 00);
console.log(fecha1);

// En milisegundos. Inicia el 01 / 01 / 1970

const fecha2 = new Date(100000000000);
console.log(fecha2);

// Con un String

const fecha3 = new Date("July 23, 1990 17:00:00");
console.log(fecha3);

// Comparar fechas

// Mayor o menor que (Devuelve Booleano)
console.log(fecha > fecha1);
console.log(fecha < fecha1);

// ERROR al comparar fechas

console.log( fecha1 === fecha3);

// Se debe transformar a milisegundos para comparar

console.log(fecha1.getTime() === fecha3.getTime());
console.log(fecha1.getTime());
console.log(fecha3.getTime());

// Obtener dia, mes, año, etc con metodos
// Año
console.log(fecha1.getFullYear());

// Mes (0 - Enero, 11 - Diciembre. Hay que sumarle 1)

console.log(fecha1.getMonth() + 1);

// Dia 

console.log(fecha1.getDate());

// Truco para formatear la fecha segun idioma o zona
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

console.log(fecha1.toLocaleDateString("en-GB"));
console.log(fecha1.toLocaleDateString("en-US"));