//nuestro propio middleware para eliminar usuarios
const adminValidate = (req, res, next) => {
  const role = req.user.role; //inf del rol extraida del token

  //
  if (role === "admin") {
    return next();
  } else {
    //no authorized
    return res.status(401).json({ message: "Access deneged" });
  }
};

module.exports = adminValidate;
