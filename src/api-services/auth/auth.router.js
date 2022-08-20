const { Router } = require('express')
const router = Router()
const controlador = require('./auth.controlador.js')

router.post('/', controlador.login)

module.exports = router
