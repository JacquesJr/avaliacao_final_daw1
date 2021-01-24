const jwt = require("jsonwebtoken");

module.exports = { 
    ensureAuthenticaded(req, res, next) {
      const authHeader = req.headers.authorization;
      console.log(authHeader);
      if (!authHeader) {
        return res.status(400).json( { message: 'Está faltando o token JWT.' });
      }

      const [, token] = authHeader.split(' ');
  
      try {
        const decoded = jwt.verify(token, 'segredoToken');
  
        const { sub } = decoded;
  
        req.user = {
          id: sub,
        };
  
        return next();
      } catch {
        return res.status(400).json( { message: 'Está faltando o token JWT.' });
      }
    }
  }