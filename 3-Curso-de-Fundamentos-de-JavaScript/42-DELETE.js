const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

async function fecthPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  const listOfPosts = responseData;

  for (const post of listOfPosts) {
    const postContainer = document.createElement("article");
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "DELETE Content";

    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    listElement.append(postContainer);
  }
}

fetchButton.addEventListener("click", fecthPosts);

async function createPost(title, content){
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId, 
    };

    sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = event.currentTarget.querySelector("#title").value;
    const content = event.currentTarget.querySelector("#content").value;

    createPost(title, content);
    console.log(title, content);
});


/*
Vamos ahora a ver como utlizar el metodo POST para borrar elementos
Para ello vamos a darle interacción al boton de DELETE Content.
Pero no estan tan secillo como decir "Borreme eso"
Lo que vamos hacer es utilizar el patron de delegacion, osea que vamos
a agregarle el evento al padre de las tarjetas para que el padre diga a quien
le estamos dando click y cual se tiene que ir. La idea es saber cual es su ID
para borrarlo
*/

// Bien vamos a agregarle el evento al padre que ya lo habiamos guardado en un const

postList.addEventListener("click", (event) =>{
    console.log(event); 
    if (event.target.tagName === "BUTTON")
    {
        const postId = event.target.closest("article").id;
        console.log(postId);
        sendHTTPRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});

// Lo unico que faltaria si fuera real la API es que el servidor lo borre o teque hacer un nuevo request