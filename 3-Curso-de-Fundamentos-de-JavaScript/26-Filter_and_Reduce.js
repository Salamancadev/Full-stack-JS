// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

// reduce() - case 1

let accumulator = 0
const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator,currentValue) => accumulator + currentValue, 0)
console.log(numbersReduce)
console.log(sum)

// reduce() - case 2

const words = ['apple', 'banana', 'hello', 'bye','banana', 'banana']

const wordFrecuency =  words.reduce((accumulator,currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }

    return accumulator
}, {})
console.log(wordFrecuency);

//Ejercicio 1
const numbers1 = [10, 20, 30, 40, 50];
const suma1 = numbers1.reduce((accumulator,currentValue) => {
     return accumulator + currentValue 
},0)

const total = numbers1.reduce ((count) => {
    return count + 1
}, 0); 

const resultado = suma1/total
console.log(suma1);
console.log(total);
console.log(resultado);

//Ejercicio 1
console.log('Ejercicio 1');
const productPrices = [120, 250, 85, 45, 200, 300, 150];
const precioTotal = productPrices.reduce((count,price) => {
    return count + price;
}, 0)

const menorCien = productPrices.reduce ((count,price) =>{
    return price > 100 ? count + 1 : count;
},0)

const totalExpensivePrice = productPrices.reduce((accumulator, price) => {
    return price > 100 ? accumulator + price : accumulator;
}, 0);

const averageExpensivePrice = countExpensiveProducts > 0 ? totalExpensivePrice / countExpensiveProducts : 0;
console.log(precioTotal);
console.log(menorCien);
console.log("Precio promedio de los productos que cuestan más de 100: ", averageExpensivePrice);