class Persona {
    // Privadas -> #
    // Solo se puede acceder desde adentro de la clase
    #nombre
    #edad

    constructor(nombre, edad,) {
        
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

    obtenNombre() { // Esto es un getter
        return this.#nombre
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
}

const persona = new Persona("Juan", 32)

// Getter -> Son metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()

console.log(edad)
// Setter -> Son metodos que nos permiten modificar atributos/metodos privados o protegidos
// Cambiar edad de Persona

persona.setEdad(44)
console.log(persona.getEdad())
