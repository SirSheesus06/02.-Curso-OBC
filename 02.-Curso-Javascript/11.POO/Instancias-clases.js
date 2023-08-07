// Creando clases

class Persona {
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

const nuevaPersona = new Persona("Juan", 32, true)
console.log(nuevaPersona);

nuevaPersona.saludo();

let numero = 60 // Asi se inicializa una variable
console.log(typeof numero); // Te indica el tipo de dato que almacena la variable


let persona2 = new Persona("Agostina", 32, false); // Asi se instancia una clase en una variable
console.log(persona2 instanceof Persona); // Indica si es una instancia de la clase que consultemos
