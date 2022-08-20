const { check } = require('express-validator')
const validator = require('../helpers/auth.helpers.js')

const checkCreate = [
  check('nombre')
    .exists()
    .not()
    .isEmpty(),
  check('apellido')
    .exists()
    .not()
    .isEmpty(),
  check('pais')
    .exists()
    .not()
    .isEmpty(),
  check('email')
    .exists()
    .not()
    .isEmpty()
    .isEmail(),
  check('telefono')
    .exists()
    .not()
    .isEmpty(),
  check('genero')
    .exists()
    .not()
    .isEmpty(),
  check('f_nacimiento')
    .exists()
    .not()
    .isEmpty(),
  check('cedula')
    .exists()
    .not()
    .isEmpty(),
  (req, res, next) => {
    validator.validateResult(req, res, next)
  }
]

module.exports = checkCreate
