//importacion jswtokens
const jwt = require("jsonwebtoken");
//importacion palabra secreta : utilizada en l 37
const { jwtSecret } = require("../config");
//importacion de login controlador
const { loginUser } = require("./auth.controller");

//Servicio para logear usuario, peticion de tipo post porque se enviara inf
const login = (req, res) => {
  // generar login de manera correcta
  const { email, password } = req.body;

  // si no existe o si no existe password retorna un error
  //return: para que termine el flujo de ejecucion,para que no genera mas respuestas
  /* 1 forma
  if (!email || !password)
    return res.status(400).json({ message: "Missing data" });
     */

  //2 forma: Si existe email y password y si no devuelve error
  if (email && password) {
    loginUser(email, password)
      .then((response) => {
        //
        if (response) {
          //manejar respuesta exitosa? Gerando un token
          //metodo sign recibe como parametro:
          //1. payload: inf queremos encriptar y add al token dle usuario
          //2. la llave secreta para que se encripte todo con respecto a esa palabra, esa palabra por ahora se maneja como un string, pero se utiliza como una variable de entorno
          const token = jwt.sign(
            {
              //estos valores que se guardan en el token
              id: response.id,
              email: response.email,
              role: response.role,
            },
            jwtSecret
          );
          res.status(200).json({
            message: "Correct Credentials",
            token,
          });
        } else {
          //else: Si da false es porque las credenciales son incorrectas, si el correo no existe
          //401: unauthorized
          res.status(401).json({ message: "invalid credentials" });
        }
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  } else {
    res.status(400).json({ message: "Missing data" });
  }
};

module.exports = {
  login,
};
