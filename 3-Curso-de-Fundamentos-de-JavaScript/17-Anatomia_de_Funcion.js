/*
Son como piezas de lego, son piezas que podemos reutilziar
cuantas veces queramos
*/

// function calculateDiscountedPrice (price, discountPercentage) {
//     const discount = (price * discountPercentage) /100
//     const priceWithDiscount = price -discount

//     return priceWithDiscount
// }

// const originalPrice = 100
// const discountPercentage = 20
// const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

// console.log('Original Price: $' + originalPrice)
// console.log('Discount: ' + discountPercentage + '%')
// console.log('Price with discount: $' + finalPrice)

//Crear una función para calcular el área de un triángulo
function areatriangulo (base, altura) {
    const area = (base * altura)/2

    return area
}

const tbase = 10
const taltura = 5
const final = areatriangulo(tbase, taltura)

console.log (`La base es ${tbase}`)
console.log (`La altura es ${taltura}`)
console.log (`La area es de ${final}`)


