const response = require('../network/response.js');

function errors(err, req, res, next) {
  console.error('[error]', err);

  const message = err.message || 'Error interno';
  const status = err.statusCode || 500;
  const path = err.path || 'Error interno'
  const errors = err.errors || ''

  response.error(req, res, {message, errors}, status, err)

}

module.exports = errors;
