const modelInventario = require('./inventario.model.js')

module.exports = {

  registroItem: async (parametro) => {
    const newItem = new modelInventario(parametro)
    try {
      await newItem.save()
      return newItem
    } catch (err) {
      return err
    }
  },

  obtenerItemId: async (parametro) => {
    console.log(parametro)
    try {
      const item = await modelInventario.find({producto: parametro})
      return item
    } catch (err) {
      return err
    }
  },



}
