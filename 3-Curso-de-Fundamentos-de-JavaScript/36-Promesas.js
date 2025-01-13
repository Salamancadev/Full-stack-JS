/*La forma que vamos a utilizar para que nuestro codigo funcione de manera asincron.
Poseen tres estados:

    1. pending: Es cuando la promesa se va a crear. 
    2. fullfilled: Este estado viene cuando la promesa se resuelve.
    3. rejected: Cuando la promesa no se resolvio.

Ademas las promesas manejan dos tipos de call back:
    1. resolve: Cuando la promesa se resuelve de manera satisfactoria.
    2. reject: Cuando la promesa no se puede resolver.

Tambien vamos a temer dos metodos en estos.
    1. then(): Metodo que se ejecuta cuando la promesa se resuelve
    2. catch(): Cuando la promesa no se resuelve y vamos a poder obtener el error para poder imprimirlo 
*/

const promise = new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        let operationSuccesful = true; 
        if (operationSuccesful){
            resolve("La operacion fue exitosa")
        }else{
            reject("Falló la operación")
        }
    }, 2000);
    
});

promise 
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    })