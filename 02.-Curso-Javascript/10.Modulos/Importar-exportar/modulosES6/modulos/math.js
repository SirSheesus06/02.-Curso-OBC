// Modulos
// Para exportar en ES6 se coloca la palabra export adelante de la funcion

export function suma(a, b) {
    return a + b;
}

export function multiplica(a, b) {
    return a * b;
}

export function eleva(a, b) {
    return a ** b;
}

export function factorial(a) {
    let factorial = 1;
    for(let i = 2; i <= a; i++) {
        // Factorial de 5: 5 * 4 * 3 * 2 * 1
        factorial *= i;
    }
    return factorial;
}

// Se puede exportar variables y mas
export const nombre = "Juanma";