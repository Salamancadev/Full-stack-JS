/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
  ];
  
  const usersTimeline = [
    {
      username: "Estefany",
      timeline: "Me encata Javascript!",
    },
    {
      username: "Oscar",
      timeline: "Bebeloper es lo mejor!",
    },
    {
      username: "Mariana",
      timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
    },
    {
      username: "Andres",
      timeline: "Yo hoy no quiero trabajar",
    },
  ];

  const usernameUS = prompt("Ingrese su usuario")
  const passwordUS = prompt("Ingrese su contraseña")

  const usernameU = usernameUS.toLowerCase()
  const passwordU = passwordUS.toLowerCase()

  
  let userFound = false
   
  for (const usuario of usersDatabase){
    if(usernameU === usuario.username && passwordU === usuario.password){
        userFound = true
        console.log("Usuario encontrado");
        break;
        }
    }
  if (userFound) {
      console.log(`Bienvenido ${usernameU}`);

      const timeline = usersTimeline.find((user) => user.username.toLowerCase() === usernameU);

      if(timeline){
        console.log(`Tu timeline es ${timeline.timeline}`);
      }else{
      console.log("No se encontro un timeline para este usuario");
      }
  }else{
    console.log("Usuario no encontrado");
  }

  
