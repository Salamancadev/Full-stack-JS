/*HTTP(Hyper Text Transfer Protocol)

En la parte de front se hacen ciertas peticiones, como el uso de APIs para pedir/enviar o actualizar información y esto se hace gracias a los métodos de HTTP

Ej: Cuando usamos fetch le estamos pidiendo a un servidor que nos envie cierta información a traves de HTTP para poder agarrarla e inyectarla en el DOM

Vamos a ver esto por medio de la consola como se esta manejando ósea como utilizar HTTP desde el frontend 
*/

fetch("https://jsonplaceholder.typicode.com/posts")

    .then((response) => response.json())
    .then((data) => console.log(data));

    