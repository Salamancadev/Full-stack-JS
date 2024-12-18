//Vamos a ver los tipos de datos en JS

//PRIMITIVOS

//String para cadenas de caracteres/textos
let nombre = 'Tere';

//Number para valores númericos 
let edad = 15;

//Boolean para afirmar o negar (True/False)
let esMayor = true;

//Null para representar ausencia de algun valor
let noHayValor = null;

//Undefined variable declarada pero sin valor asignado
let noDefinido = undefined;

//Symbol para indicar un valor unico
let simboloUnico = Symbol('único')

//Bigint para variables númericas enormes
let numeroGrande = 2n

//COMPLEJOS

//Object es una estructura que almacena pares clave-valor.
let persona = { nombre: "Santiago", edad: 25 };  

//Array son listas ordenadas de valores.
let frutas = ["manzana", "pera", "uva"];  

//Function son bloques de código reutilizables
function saludar() {
    console.log("¡Hola Mundo!");
}
saludar(); // Invoca la función  