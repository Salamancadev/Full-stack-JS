// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log (numbers)
console.log (squaredNumbers)

// forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)


// Exercise: Fahrenheit to Celsius conversion
const temperaturesFahrenheit = [32, 68, 95, 104, 212]
const temperaturesInCelsius = temperaturesFahrenheit.map (temp => (5/9)* (temp-32)) 
console.log('Temperatures in F ',temperaturesFahrenheit)
console.log('Temperatures in C ',temperaturesInCelsius)

// Exercise: Sum of Elements in an Array
const elements = [1, 2, 3, 4, 5]
let sum = 0

elements.forEach (number => {
    sum += number
})

console.log('Array of Numbers: ', elements)
console.log('Sum of Numbers: ',sum)
