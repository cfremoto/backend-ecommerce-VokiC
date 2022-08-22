const modelCupon = require('./cupon.model.js')

module.exports = {

  crearCupon: async (parametro) => {
    const cupon = await new modelCupon(parametro)
    try {
      return cupon.save()
    } catch (err) {
      return err
    }

  },

  obtenerCuponCodigo: async (parametro) => {
    try {
      const cupon = await modelCupon({ codigo: new RegExp(parametro, 'i') })
      return cupon
    } catch (err) {
      return err
    }

  }


}
