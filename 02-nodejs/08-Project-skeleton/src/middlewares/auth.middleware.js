/* //importacion de librerias de pasport

const { jwtSecret } = require("../config");
const { getUserById } = require("../users/users.controllers");

//middleare para proteger rutas

//1 Revisar si existe un token
//2 Verficar si el token pertenece a un usuario valido
// 3 modificar el req y agregar req.user con la informacion desencriptada  del token

//estrategia: diferentes maneras de hacer un login con (fb, google,JWT )

const JwtStrategy = require("passport-jwt").Strategy; //passport maneja estrategias  para las diferentes AUTENTICACIONES
const ExtractJwt = require("passport-jwt").ExtractJwt; //extraer el jwt del headers de la peticion

//VALIDACION: EXPORTANDO FUNCION ANONIMA: RECIBE PASSPORT
module.exports = (passport) => {
  //objeto para configuraciones manejar jwt con passowrd
  const options = {
    //va a ir a header de auth revisar cuales inician depsues de jwt y lo extraera
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    //palabra secreta
    secretOrkey: jwtSecret,
  };
  passport.use(
    new JwtStrategy(options, async (decoded, done) => {
      //done: recibe dos parametros 1: error 2: decoded
      try {
        //decoded: token decodificado
        const response = await getUserById(decoded.id);
        if (!response) {
          //
          return done(null, false);
        }
        return done(null, decoded);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
*/
//? Middleware para proteger rutas

//* 1- Revisar si existe un token
//* 2- Verificar si el token pertenece a un usuario valido
//* 3- Modificar el req y agregar req.user con la informacion desencriptada del token

//? estrategia: Diferentes maneras de hacer un login(Con facebook, google, JWT, Github...)

const { jwtSecret } = require("../config");
const { getUserById } = require("../users/users.controllers");
const JwtStrategy = require("passport-jwt").Strategy;
//? Passport maneja estrategias para las diferentes autenticaciones
const ExtractJwt = require("passport-jwt").ExtractJwt;
//? Extrae los header de la peticion

//? Exportando funcion anonima
module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: jwtSecret,
  };
  passport.use(
    new JwtStrategy(options, async (decoded, done) => {
      //? done(error, decoded)
      try {
        const response = await getUserById(decoded.id);
        if (!response) {
          return done(null, false);
        }
        console.log("decoded JWT", decoded);
        return done(null, decoded);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
