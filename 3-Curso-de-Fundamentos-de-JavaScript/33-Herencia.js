//Practica del concepto de prototipos y herencias.
//La propiedad prototipo solo existe en objetos (Clases y Funciones constructoras)

class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre
        this.tipo = tipo
    }

    emitirSonido(){
        console.log("El animal emite un sonido");
    }
}

class Perro extends Animal{
    constructor(nombre, tipo, raza){
        super(nombre, tipo)
        this.raza = raza;
    }

    emitirSonido(){
        console.log("El perro ladra");
    }

    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }
}

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

//Nuevo metodo para instancia de perro1
perro1.nuevoMetodo = function() {
    console.log("Este es un metodo");
};

//Los nuevos metodos agregados por prototype solo se pueden agregar a las clases/funciones constructoras, no a las instancias
//Esto se logra gracias a la cadena de prototipado
Perro.prototype.segundoMetodo = function (){
    console.log("Es otro nuevo metodo");
};