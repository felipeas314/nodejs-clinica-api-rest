const logMiddleware = require('./log-middleware');
const tokenMiddleware = require('./token-middleware');
const validationErrorsMiddleware = require('./validation-errors-middleware');

module.exports = {
  logMiddleware,
  tokenMiddleware,
  validationErrorsMiddleware
}