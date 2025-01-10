const persona = {
    nombre: "Santiago",
    edad: 19,
    direccion: {
        calle: "Av 26",
        ciudad: "Bogota",
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    },
};

console.log(persona);
persona.saludar()

//Agregar nuevas propiedades
persona.telefono = "555-555-5555";

console.log(persona.telefono);
console.log(persona);

//Agregar un nuevo metodo

persona.despedir = () => {
    console.log("Adios");
}

persona.despedir()
console.log(persona);

//Borrar propiedades y metodos
delete persona.telefono;

console.log(persona);

delete persona.despedir;
console.log(persona);