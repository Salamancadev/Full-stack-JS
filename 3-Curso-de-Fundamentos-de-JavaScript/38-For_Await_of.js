/*Que pasaria si hay que hacer mas de una petición en una promesa?
Aqui surge el "For Await of", este es un bucle que trabaja con un "Async and Await"
para pasar las peticiones de un array por ejemplo de forma asincrona(Se resuelvan y pasen al call stack )
*/

async function fetchData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")

        let data = await response.json ();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {
    try{
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response.json
            ();
            console.log(data);
        } 
        }catch(error){
        console.log(error);
    }
}