/*

Estructura de datos

Key/Value

objeto{
    propiedad: valor,
    propiedad: valor,
    propiedad: valor,
    Metodos
}

*/

const persona = {
    nombre: "Santiago",
    edad: 19,
    direccion: {
        calle: "Av 26",
        ciudad: "Bogota",
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    }
}

//Practica mia

const auto = {
    marca: "BWM",
    modelo: "Sedan",
    año: 1998,
    color: "Rojo",
    detalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${auto["modelo"]}, Año: ${auto.año}`);
    }
}
auto.detalles();