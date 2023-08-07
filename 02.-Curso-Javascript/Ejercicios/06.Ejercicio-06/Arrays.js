// Lista de compras

const listaCompras = ["Frutas", "Harina", "Huevos", "Leche", "Carne"];

// Agrego "Aceite de Girasol"
listaCompras.push("Aceite de Girasol");

// Quito de la lista "Aceite de Girasol"
listaCompras.pop();

// Mis Peliculas Favoritas

const favMovie = [
    {titulo: "Back to the Future 2", director:"Robert Zemeckis", fecha: 1989},
    {titulo: "Star Wars: Return of Jedi", director:"Richard Marquand", fecha: 1983},
    {titulo: "John Wick", director:"Chad Stahelski", fecha: 2014}
];

// Busco que su fecha sea mayor que 2010 con .filter()
const newFilms = favMovie.filter(date => date.fecha > 2010);

// Lista con los directores de peliculas con .map()
const dirNames = favMovie.map(dir => dir.director);

// Lista con los nombres de peliculas con .map()
const movieNames = favMovie.map(tittle => tittle.titulo);

// Unir lista de directores con lista de titulos
const dirTitulos = dirNames.concat(movieNames);

// Unir lista de directores y titulos con factor de propagacion
const dirTitulos2 = [...dirNames, ...dirTitulos];