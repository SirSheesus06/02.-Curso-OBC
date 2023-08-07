// Gestionar posibilidad de errores

const miFuncion = valor => {
    if(typeof valor == "number") {
        return 2 * valor
    }
    throw new Error("El valor debe ser tipo numero")
}

const elDoble = "8888";

console.log(elDoble);

try {
    // Codigo que puede fallar
    console.log("Se ejecuta de manera correcta");
    const porDos = miFuncion(elDoble);
    console.log(elDoble);

} catch(e) {
    // En caso de fallar, ejecutar este codigo
    console.error(e);
    console.error("ERROR!")
} finally {
    console.log("Se ejecuta siempre");
}

// Tipos de errores en el interprete
// InternalError, SyntaxError, TypeError, RangeError y ReferenceError