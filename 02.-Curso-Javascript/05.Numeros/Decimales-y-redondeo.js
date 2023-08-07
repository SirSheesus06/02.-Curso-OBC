// Operaciones Aritmeticas

let a = 3.5;
let b = 4.8;

// Suma (+)

console.log(a + b);

// Resta (-)

console.log(a - b);

// Multiplicacion (*)

console.log(a * b);

// Division (7)

console.log(a / b);

// Representacion de numeros en strings

console.log(typeof a);

let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// Redondeo de decimales

let c = 3.3;
let d = c * 3;

console.log(d);

// .tofixed()
// redondea y limita cantidad de decimales que le pasemos por parametro
// OJO!!! Lo convierte a STRING

console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

// .toPrecision(x)
// Limita y redonde el numero de cifras significativas
// Devuelve STRING!!!

let e = 1325.5646
console.log(e.toPrecision(5));


