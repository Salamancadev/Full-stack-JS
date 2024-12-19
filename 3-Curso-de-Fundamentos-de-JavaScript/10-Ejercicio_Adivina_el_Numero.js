//Juego adivinar el numero

const numeroSecreto = Math.floor(Math.random () * 10 + 1);

const numeroJugador = parseInt (
    prompt ("Adivina el número secreto entre 1 al 10")
);

console.log (`Este es el número con el que juegas ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log ("¡Felicidades le atinaste")

}else if ( numeroJugador < numeroSecreto) {
    console.log ("El numero es mayor")

}else {
    console.log ("El numero es menor")
}