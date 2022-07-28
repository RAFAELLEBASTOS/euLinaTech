const jwt = require('jsonwebtoken');
const { request } = require('../app');

exports.checkAuth = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  if (!authHeader) return response.status(401).json({ message: "Acesso negado"});
  
  const token = authHeader && authHeader.split(" ")[1];

    const secret = process.env.SECRET;

    try {
        jwt.verify(token, secret)
        console.log("huhu autenticado")
    next();
    } catch (error) {
        return response.status(400).json({message: "Token inválido"})
    
    }
}