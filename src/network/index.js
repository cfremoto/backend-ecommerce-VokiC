const router = require('express').Router()
const cliente = require('../api-services/clientes/cliente.router.js')
const auth = require('../api-services/auth/auth.router.js')
const productos = require('../api-services/producto/producto.router.js')
const inventario = require('../api-services/inventario/inventario.router.js')

router.use('/clientes', cliente)
router.use('/clientes/login', auth)
router.use('/productos', productos)
router.use('/inventario', inventario)


module.exports = router
