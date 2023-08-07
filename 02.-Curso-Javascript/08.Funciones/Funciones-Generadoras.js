// Funciones generadoras

// Generador de id
function* generateID() {
    let id = 0
    while(true) {
        id++;
        if(id === 10) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generateID();

// Como devuelve un objeto, se puede acceder al value
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);