//login se necesita Email y contraseña del usuario

const { getUserByEmail } = require("../users/users.controllers");

const { comparePassword } = require("../utils/crypto");

/* 
email es unico en bdd y se busca que haga referencia a un usuario
*/

//Comparar datos validos: Controlador tiene 2 posibles respuestas
//1 las credenciaes son validas y retornara el usuario
//2 las credenciaes son invalidas y retornamos el false
const loginUser = async (email, password) => {
  // Ejecutar funcion asincrona controlador  usuario y resolver promesas mediante try catch que hace la funcion del then y catch
  //No se utiliza then y catch debido al scope PORQUE LO QUE SE RETORNA HACE REFERENCIA SOLO EN ESE SCOPE
  try {
    //El resultado de esa promesa que se guarde en una variable
    const user = await getUserByEmail(email);
    //user.password contiene la contraseña encriptada

    //comparePassword: compara contraseña en texto plano y encriptada y retorna true si son iguales y false si no lson
    const verifyPassword = comparePassword(password, user.password);
    //las credencias  son correctas retornamos el usuario
    if (verifyPassword) {
      return user;
    }
    //las credencias no son correctas retornamos false
    return false;
  } catch {
    //error de sequelize
    return false;
  }
};

// Funcion asincrona genera una promesa, tenemos las funcionalidades segun el controlador
/* loginUser("aron@aron.com", "aron123")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
 */
//exportacion de controlador
module.exports = {
  loginUser,
};
