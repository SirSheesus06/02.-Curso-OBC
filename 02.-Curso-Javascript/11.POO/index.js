// Objetos
// Manera de crear 1 objeto para varios usos
// Probando git

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function() {
            console.log("Hola")
        }
    }
}

const persona1 = creaPersona("Juan", 32, true);

console.log(persona1);

