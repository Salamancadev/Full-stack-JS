//Para POO siempre se utilizara esta sintaxis

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;   
    }
    saludar() {
        console.log (`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

const persona1 = new Persona('Santiago', 19);

persona1.saludar()