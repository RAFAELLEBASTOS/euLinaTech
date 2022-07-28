const jwt = require('jsonwebtoken');
const { request } = require('../app');

exports.checkAuth = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return response.status(401).json({ message: "Acesso negado"});


    const secret = process.env.SECRET;

    jwt.verify(token, secret, (err, decoded) => {
      if(err) {
        return response.status(400).json({message: "Token inválido"})
      }
      request.userId = decoded.id;
    });

    next();
}