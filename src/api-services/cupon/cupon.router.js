const { Router } = require('express')
const router = Router()
const controlador = require('./cupon.controlador.js')

router.post('/', controlador.crearCupon)
router.get('/', controlador.obtenerCuponCodigo)
router.delete('/', controlador.eliminarCupon)


module.exports = router
