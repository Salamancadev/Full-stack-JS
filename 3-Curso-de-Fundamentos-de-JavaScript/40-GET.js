//Clase metodo GET: Vamos a ver como hacer una petición y como interactuar con ella

function sendHTTPRequest(method, url, data){
    return fetch(url,{
        method: method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    } ).then((response) => {
        return response.json ();
    });
}

async function fetchPosts() {
    const responseData = await 
    sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts");
    console.log(responseData);
    const listOfPosts = responseData;
    
}

