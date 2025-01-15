/*Esta es otra forma de trabajar promesas asincronas, con Async and Await.
Async and await devuelve una promesa, pero se diferencia ya que tiene una forma mas lesgible de leet los pasos.
*/

// function  fetchData() {
//     fetch("https://rickandmortyapi.com/api/character"
//         .then((result) => result.json 
//         ())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error))
// }

async function fetchData() {
    try {
        let response = await fetch("https://rickandmortyapi.com/api/character")

        let data = await response.json ();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
