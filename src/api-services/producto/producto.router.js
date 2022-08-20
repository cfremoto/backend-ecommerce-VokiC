const { Router } = require('express')
const router = Router()
const controlador = require('./producto.controlador.js')
const checkProducto = require('../../validator/producto.validator.js')
const multiParty = require('connect-multiparty')

const path = multiParty({uploadDir: __dirname + '/../../uploads/productos'})

router.post('/',  path, controlador.crearProducto)
router.get('/titulo',  controlador.obtenerProductosTitulo)
router.get('/detalle', controlador.obtenerProducto)
router.patch('/actualizar/:id', path, controlador.actualizarProducto)
router.get('/portada', controlador.obtenerPortada)
router.delete('/:id', controlador.deleteProducto)

module.exports = router
