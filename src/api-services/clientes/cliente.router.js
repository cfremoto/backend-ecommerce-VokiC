const { Router } = require('express')
const router = Router()
const controlador = require('./cliente.controlador.js')
const checkRol = require('../../middleware/authPorRol.js')
const validator = require('../../validator/cliente.validator.js')

router.post('/', validator ,controlador.crearCliente)
router.get('/',  checkRol.checkLogin, controlador.obtenerClientes)
router.get('/cliente',  controlador.obtenerCliente)
router.patch('/cliente/:id', controlador.clienteUpdate)
router.patch('/cliente/pass/:id', controlador.clienteUpdatePass)

module.exports = router
