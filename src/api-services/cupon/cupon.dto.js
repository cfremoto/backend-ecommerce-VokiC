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
      return await modelCupon.find({ codigo: new RegExp(parametro, 'i') }).sort({ createdAt: -1})
    } catch (err) {
      return err
    }

  },

  eliminarCupon: async (parametro) => {
    try {
      return await modelCupon.findByIdAndDelete(parametro)
    } catch (err) {
      return err
    }

  }


}
