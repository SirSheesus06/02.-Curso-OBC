// Datos personales

const persona = {
    nombre: "Juan Manuel",
    apellido: "Vivas",
    edad: 32,
    altura: 190,
    eresDeveloper: true
};

// Agrego mi edad a una variable con la key "edad" del objeto persona
const miEdad = persona.edad;

// Nuevo objeto con amigos
const personas = [ persona, 
    {nombre: "Leandro", apellido: "Viviani", edad: 33, altura: 172, eresDeveloper: false},
    {nombre: "Maximiliano", apellido: "Monzon", edad: 34, altura: 160, eresDeveloper: false}
];

// Lista ordenada por edad

const masViejo = personas.sort((a, b) => {
    return b.edad - a.edad;
})

console.log(persona);
console.log(miEdad);
console.log(personas);

