module.exports = (req, res, next) => {
  console.log('Middleware de login');
  next();
}
