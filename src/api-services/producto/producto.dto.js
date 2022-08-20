const { trusted } = require('mongoose')
const modelProducto = require('./producto.model.js')

module.exports = {

  createProducto: async (dataProducto) => {
    const producto = new modelProducto(dataProducto)
    try {
      const newProducto = await producto.save()
      return newProducto
    } catch (err) {
      return err
    }

  },

  obtenerProductosTitulo: async (parametro) => {
    try {
      const productos = await modelProducto.find({titulo: new RegExp(parametro, 'i')})
      return productos
    } catch (err) {
      return err
    }

  },

  obtenerProducto: async (parametro) => {
    try {
      const producto = await modelProducto.findById(parametro)
      return producto
    } catch (err) {
      return err
    }

  },

  obtenerProductosDestacados: async (parametro) => {
  },

  obtenerProductosNuevos: async (parametro) => {
    try {
      const productosNuevos = await modelProducto.find({ estado: parametro.estado }).sort({ createAt: -1 })
      return productosNuevos
    } catch (err) {
      return err
    }

  },

  obtenerProductosCategoria: async (parametro) => {
    try {
      const productosCategoria = await modelProducto.find({ categoria: parametro.categoria, estado: parametro.estado })
      return productosCategoria
    } catch (err) {
      return err
    }

  },

  actualizarProducto: async (parametro, parametroActualizar) => {
    try {
      const producto = await modelProducto.findByIdAndUpdate({ _id: parametro }, parametroActualizar, { new: true })
      return producto
    } catch (err) {
      return err
    }
  },

  deleteProducto: async (parametro) => {
    try {
      await modelProducto.findByIdAndDelete(parametro)
    } catch (err) {
      return err
    }
  }


}
