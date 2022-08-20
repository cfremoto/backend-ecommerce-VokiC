const inventarioDto = require('./inventario.dto.js')
const productoDto = require('../producto/producto.dto')
const response = require('../../network/response.js')

module.exports = {

  entradaInventarioStock: async (req, res, next) => {
    const data = req.body
    const id = req.params.idProducto

    data.producto = id

    const newItem = await inventarioDto.registroItem(data)
    if (newItem.message) return next(newItem)

    const producto = await productoDto.obtenerProducto(id)

    producto.stock += parseInt(data.cantidad)

    const updateStock = await productoDto.actualizarProducto(id, {stock: producto.stock})

    response.success(req, res, {info: 'Stock Actualizado correctamente', newItem}, 201)
  },

  obtenerEntradasInventario: async (req, res, next) => {
    const items = await inventarioDto.obtenerItemId(req.params.idProducto)
    if (items.message) return next(items)

    response.success(req, res, {info: 'Busqueda extitosa', items}, 200)
  },


}
