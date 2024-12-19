// Operadores Lógicos

// && AND: Si este valor y este valor hacen algo pasa esto
// || OR:  Si este valor A o este valor B cumplen hacen algo
// !  NOT: Negación, invierte el valor de la afirmacion

const a = 10;
const b = 20;
const c = "10";

let and = a == b && a === c;
console.log (and);
console.log (typeof and)

let or = a != b || a === c;
console.log (or);
console.log (typeof or)

let not = !(a === c );
console.log (not);
console.log (typeof not)
//Arroja true por que invierte el false