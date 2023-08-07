// Trabajando con objetos

const objNew = {
    id: 1,
    nombre: "Juan",
    apellido: "Vivas",
    isDeveloper: true,
    libros_favoritos: ["Danza de Dragones", "El Retorno del Rey"],
    "04-Juegos_favoritos": ["The last of Us", "Pes 06"]
    // Solo se puede definir una Key que empiece con caracteres o
    // Numeros si esta dentro de comillas simples o dobles
};

// Acceder a propiedades

console.log(objNew.apellido);
console.log(objNew["libros_favoritos"]);

// Acceder a propiedades mediante una variable

const prop = "isDeveloper";

console.log(objNew[prop]);

// Copiar valores
// OJO!!!! Copia los valores por referencia a la memoria

const objNew2 = objNew;
console.log(objNew2)

// Si cambio valor de objNew2, lo cambia en objNew tambien
objNew2.nombre = "Manuel";
console.log(objNew2.nombre);

// Para copiar solo los valores se hace asi

const objNew3 = {...objNew};
console.log(objNew3);

objNew3.nombre = "Juan Manuel";
console.log(objNew3.nombre)
console.log(objNew.nombre);

// Ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "Rogue one", date: 2016},
    {titulo: "El Efecto Mariposa", date: 2004},
    {titulo: "Vovler al Futuro 2", date: 1989},
    {titulo: "El Retorno del Rey", date: 2003},
    {titulo: "John Wick", date: 2014}
];

console.log(listaPeliculas)

listaPeliculas.sort((a, b) => a.date - b.date);

console.log(listaPeliculas);
