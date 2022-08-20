const { check } = require('express-validator')
const validator = require('../helpers/auth.helpers.js')

const productoValidator = [
  check('titulo')
    .exists()
    .isEmpty()
    .not(),
  check('slug')
    .exists()
    .isEmpty()
    .not(),
  check('portada')
    .exists()
    .isEmpty()
    .not(),
  check('precio_antes_bs')
    .exists()
    .isEmpty()
    .not()
    .isNumeric(),
  check('precio_antes_dolares')
    .exists()
    .isEmpty()
    .not()
    .isNumeric(),
  check('precio')
    .exists()
    .isEmpty()
    .not()
    .isNumeric(),
  check('precio_dolar')
    .exists()
    .isEmpty()
    .not()
    .isNumeric(),
  check('descripcion')
    .exists()
    .isEmpty()
    .not(),
  check('contenido')
    .exists()
    .isEmpty()
    .not(),
  check('nventas')
    .exists()
    .isEmpty()
    .not()
    .isNumeric(),
  check('categoria')
    .exists()
    .isEmpty()
    .not(),
  check('visibilidad')
    .exists()
    .isEmpty()
    .not(),
  (req, res, next) => {
    validator.validateResult(req, res, next)
  }

]

module.exports = productoValidator
