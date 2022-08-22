const router = require('express').Router()
const cliente = require('../api-services/clientes/cliente.router.js')
const auth = require('../api-services/auth/auth.router.js')
const productos = require('../api-services/producto/producto.router.js')
const inventario = require('../api-services/inventario/inventario.router.js')
const cupon = require('../api-services/cupon/cupon.router.js')
const config = require('../api-services/config/config.router.js')

router.use('/clientes', cliente)
router.use('/clientes/login', auth)
router.use('/productos', productos)
router.use('/inventario', inventario)
router.use('/cupon', cupon)
router.use('/config', config)


module.exports = router
