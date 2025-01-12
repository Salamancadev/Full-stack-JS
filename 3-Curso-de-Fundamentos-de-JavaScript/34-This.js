/*
Es una palabra reservada y se utiliza en el momento de trabajar con clases

this --- class

this --- object -- class

*/

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

}

const persona1 = new Persona("Alice", 25);
console.log(persona1);

persona1.nuevoMetodo = function () {
     console.log(`Hola me llamo ${this.nombre}`);
}