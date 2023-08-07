// Operador switch

let nota = 10;

switch (nota) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Desaprobado");
    break;
    case 5:
        console.log("Aprobado");
    break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Sobresaliente");
    break;
    default:
        console.log("Error, debe introducir un numero del 1 al 10");
    break;
}