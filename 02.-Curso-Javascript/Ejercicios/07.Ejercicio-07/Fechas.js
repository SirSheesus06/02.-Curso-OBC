// Fecha de hoy

const todayDate = new Date();

// Fecha de Nacimiento

const bornDate = new Date(1990, 6, 23 ,17 ,00);


// Saber si hoy es mas tarde que la fecha de mi nacimiento

const compareBorn = todayDate > bornDate;


// Dia de nacimiento

const bornDay = bornDate.getDate();

// Mes de Nacimiento

const bornMonth = bornDate.getMonth() + 1;


// Año de nacimiento

const bornYear = bornDate.getFullYear();