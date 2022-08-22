const cuponDto = require('./cupon.dto.js')
const response = require('../../helpers/auth.helpers.js')

module.exports = {

  crearCupon: async (req, res, next) => {
    const data = req.body
    const cupon = await cuponDto.crearCupon(data)
    if (cupon.message) return next(cupon)

    response(req, res, {info: 'Cupon registrado exitosamente', cupon}, 201)
  },

  obtenerCuponCodigo: async (req, res, next) => {
    const data = req.body['cupon']
    const cupon = await cuponDto.obtenerCuponCodigo(data)
    if (cupon.message) return next(cupon)

    response(req, res, {info: 'Busqueda Exitosa', cupon}, 200)
  }


}
