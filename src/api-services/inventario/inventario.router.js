const { Router } = require('express')
const router = Router()
const controlador = require('./inventario.controlador.js')

router.post('/:idProducto', controlador.entradaInventarioStock)
router.get('/:idProducto', controlador.obtenerEntradasInventario)

module.exports = router
