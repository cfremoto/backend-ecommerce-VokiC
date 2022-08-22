const modelConfig = require('./config.model.js')

module.exports = {

  createConfig: async (parametro) => {
    try {
      const config = await new modelConfig(parametro)
      return await config.save()
    } catch (err) {
      return err
    }
  },

  agregarCategoriaConfig: async (parametro) => {
    try {
      return await modelConfig.findByIdAndUpdate(id, {$push: {categoria: parametro}})
    } catch (err) {
      return err
    }
  },

  obtenerConfig: async (parametroBusqueda) => {
    try {
      return await modelConfig.findById({_id: parametroBusqueda})
    } catch (err) {
      return err
    }
  },


  actualizarConfig: async (parametroBusqueda, parametro) => {
    try {
      return await modelConfig.findByIdAndUpdate({_id: parametroBusqueda}, parametro)
    } catch (err) {
      return err
    }

  },



}
