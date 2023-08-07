class Persona {
    //TODO Privadas -> #
    // Solo se puede acceder desde adentro de la clase
    #nombre
    #edad
    //#obtenEdad

    //TODO Protegidos -> _
    //TODO Solo se puede acceder desde adentro de la clase y desde clases descendientes
    _isDevelopoer = true

    constructor(nombre, edad,) {
        
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

    obtenNombre() {
        return this.#nombre
    }

    #obtenEdad () {
        return this.#edad
    }
}

const persona = new Persona("Juan", 32)
// console.log(persona)
// console.log(persona.nombre)
console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad())
console.log(persona._isDeveloper)