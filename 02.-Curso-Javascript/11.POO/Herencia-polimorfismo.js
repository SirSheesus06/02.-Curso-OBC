// Herencia (inheritance)

class Persona {
    constructor(nombre, edad,) {
        this.nombre = nombre
        this.edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
    super(nombre, edad)
    this.lenguaje = lenguaje
    }

    saludo() {
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`);
    }
}

const nuevoDev = new Desarrollador("Juan", 32, "JavaScript")
nuevoDev.saludo()

console.log(nuevoDev)


// Polimorfismo => Varias Formas

