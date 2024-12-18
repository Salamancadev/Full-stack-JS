//Strings son cadenas de caracteres

//Tipo de dato: String

//Para escribir string podemos escribir los strings de la seguiente manera

let string1 = 'Hola mundo';      //Comillas simples 
let string2 = "JavaScript es genial";     //Comillas dobles

//Concatenación
let string3 = `${string1}  feliz :)` ;        // Backticks (template literals), con estas mismas podemos concatenar
let string4 = string1 + " " + string2

// console.log(string1);
// console.log(string2);
// console.log(string3);
// console.log(string4);

//Longitud y Cambio de Mayúsculas/Minúsculas

let frase = "JavaScript es Extremandamente Genial"
console.log(frase.length)
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())
console.log(frase.substring(0, 10))