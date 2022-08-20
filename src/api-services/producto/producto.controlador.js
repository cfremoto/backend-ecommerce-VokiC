const fs = require('fs')
const path = require('path')
const response = require('../../network/response.js')
const productoDto = require('./producto.dto.js')
const inventarioDto = require('../inventario/inventario.dto.js')
const { info } = require('console')


module.exports = {

  crearProducto: async (req, res, next) => {

    const data = req.body
    const img = req.files.imagen.path.split('/').pop()

    data.slug = data.titulo.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    data.portada = img

    const newProducto = await productoDto.createProducto(data)
    if (newProducto.message) return next(newProducto)

    const registroInventario = await inventarioDto.registroItem({
      producto: newProducto._id,
      cantidad: newProducto.stock
    })
    if(registroInventario.message) return next(registroInventario)

    response.success(req, res, {info: 'Producto creado exitosamente', newProducto}, 201)
  },

  obtenerProductosTitulo: async (req, res, next) => {

    const producto = await productoDto.obtenerProductosTitulo(req.body.titulo)
    if (producto.message) return next(producto)

    response.success(req, res, {info: 'Busqueda exitosa', producto}, 200)
  },

  obtenerProducto: async (req, res) => {

  },

  actualizarProducto: async (req, res) => {

  },

  obtenerProductosDestacados: async (req, res) => {

  },

  obtenerProductosNuevos: async (req, res) => {

  },

  obtenerProductosCategoria: async (req, res) => {

  },

  actualizarProducto: async (req, res, next) => {

    const data = req.body
    const id = req.params.id

    if (req.files) {
      const oldImg = await productoDto.obtenerProducto(id)
      fs.unlinkSync(`./src/uploads/productos/${oldImg.portada}`)
      const img = req.files.imagen.path.split('/').pop()
      data.portada = img
    }

    const newProducto = await productoDto.actualizarProducto(id, data)
    if(newProducto.message) return next(newProducto)

    response.success(req, res, {info: 'Producto actualizado exitosamente', newProducto}, 201)
  },

  obtenerPortada: async (req, res, next) => {

    const img = req.body.img

    fs.stat(`./src/uploads/productos/${img}`, (err) => {
      if (!err) {
        res.status(200).sendFile(path.resolve(`./src/uploads/productos/${img}`))
      } else {
        res.status(200).sendFile(path.resolve('./src/uploads/default.png'))
      }
    })

  },

  deleteProducto: async (req, res, next) => {
    const productoEliminado = await productoDto.deleteProducto(req.params.id)
    if (productoEliminado?.message) return next(productoeliminado)

    response.success(req, res, {info: 'Producto eliminado correctament'}, 200)
  }


}
