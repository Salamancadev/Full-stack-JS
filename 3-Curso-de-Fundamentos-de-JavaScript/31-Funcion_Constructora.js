/*
const persona = {
    nombre: "Diego",
    apellido: "De Granada"
}

*/
//Funcion constructora
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//Se genera una instancia que son todos los objetos que vengan de la funcion constructora

const persona1 = new Persona("Juan", "Perez", "30")
console.log(persona1);

const persona2 = new Persona("Santiago", "Salamanca", "19")
console.log(persona2);


/*
Para agregar una propiedad nueva podemos:
1. Agregarla directamente a la funcion constructora o,
2. Agregarla al prototipo de la funcion con .prototype

*/
persona.prototype.telefono = "555-555-5555";

//O podemos agregar a una sola instancia
persona1.nacionalidad = "Mexicano"

//Para agregar un metodo se puede igualmente con prototipo
persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

persona1.saludar()
persona2.saludar()
