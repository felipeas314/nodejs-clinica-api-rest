const { verifyToken } = require('../services/token-service');

module.exports = async (req, res, next) => {
  console.log('Middleware de token');

  let authorizationHeader = req.headers['authorization'];
  
  if(!authorizationHeader){
    return res.status(401).json({
      message: 'Token é obrigatório',
      date: new Date()
    })
  }

  const token = authorizationHeader.slice(7,authorizationHeader.length);

  try{
    await verifyToken(token);
  }catch(err){
    console.log(err);
    return res.status(401).json({
      message: 'Token inválido',
      date: new Date()
    })
  }

  next();
}
