//Tipo de dato Number

//1. Tipo Entero y decimal
const entero = 42
const decimal = 3.14

console.log(typeof entero, typeof decimal)

//2. Notación científica
const cientifica = 5e3

//3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones aritméticas

//1. Suma, Resta, Multiplicación y División
const suma = 3+4
const resta = 3-4
const multiplicacion = 13*4
const division = 16/4

//2. Módulo y Exponenciación
const modulo = 15 % 8
console.log(modulo)
const exponenciacion = 2**3 

//Presición
const resultado = 0.1 + 0.2
console.log (resultado)
console.log (resultado.toFixed(1))
console.log (resultado === 0.3)


//Operaciones Avanzadas
const raizCuadrada = Math.sqrt (16)
const valorAbsoluto = Math.abs (-15)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)