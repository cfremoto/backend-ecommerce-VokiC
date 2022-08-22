const router = require('express').Router()
const controlador = require('./config.controlador.js')
const multiParty = require('connect-multiparty')
const path = multiParty({uploadDir: './src/uploads/logo'})


router.post('/', path, controlador.createConfig)

module.exports = router
