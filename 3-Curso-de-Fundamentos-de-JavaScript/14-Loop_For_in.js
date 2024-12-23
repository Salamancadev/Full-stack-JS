/*

for im --> objetos 

propiedades = valor

array, string

item 

for (varible in objeto) {
    codigo
}
*/

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja:2 ,
    uva: 1,
};

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}
