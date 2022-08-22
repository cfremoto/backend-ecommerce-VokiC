const cuponDto = require('./cupon.dto.js')
const response = require('../../network/response.js')

module.exports = {

  crearCupon: async (req, res, next) => {
    const data = req.body
    const cupon = await cuponDto.crearCupon(data)

    if (cupon.message) return next(cupon)

    response.success(req, res, {info: 'Cupon registrado exitosamente', cupon}, 201)
  },

  obtenerCuponCodigo: async (req, res, next) => {
    const data = req.body['codigo']
    const cupon = await cuponDto.obtenerCuponCodigo(data)
    if(!!cupon) return response.error(req, res, 'Ese cupon no existe', 403, '')
    if (cupon.message) return next(cupon)

    response.success(req, res, {info: 'Busqueda Exitosa', cupon}, 200)
  },

  eliminarCupon: async (req, res, next) => {
    const eliminado = await cuponDto.eliminarCupon(req.body['id'])
    if (eliminado.message) return next(eliminado)

    response.success(req, res, 'cupon eliminado satisfactoriamente', 200)
  },

  aplicarCupon: async (req, res, next) => {
    const { limite, codigo } = req.body

  }


}
