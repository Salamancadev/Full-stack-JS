//Operadores de comparacion

// ==   Comparar es igual a algo, si es true hace una cosa, si es false hace otra cosa
// ===  Si algo es igual a algo, pero genera una verificación del valor y el tipo de dato
// !=   Compara si es diferente el valor (True), si es igual es False
// !==  De igual forma existe el diferente en valor y tipo de dato
// > Mayor
// < Menor 
// >= Mayor o igual
// <= Menor o igual

const a = 10;
const b = 20;
const c = "10";

let comparacion = a == c;
console.log(comparacion)
console.log(typeof comparacion)


let comparacionTipo = a === c;
console.log(comparacionTipo)
console.log(typeof comparacionTipo)

let diferente = a != b;
console.log(diferente)
console.log(typeof diferente)

let diferenteTipo= a !== c;
console.log(diferenteTipo)
console.log(typeof diferenteTipo , "Diferente tipo")