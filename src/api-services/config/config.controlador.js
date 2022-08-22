const response = require('../../network/response.js')
const configDto = require('./config.dto.js')
const fs = require('fs')
const path = require('path')

module.exports = {

  createConfig: async (req, res, next) => {
    const data = req.body
    const logo = req.files.logo.path.split('/').pop()

    data.logo = logo

    const config = await configDto.createConfig(data)
    if (config.message) return next(config)

    response.success(req, res, {info: 'Configuracion exitos', config}, 201)
  },

  agregarCategoriaConfig: async (req, res, next) => {
    const data = req.body.categoria

    const categoria = await configDto.agregarCategoriaConfig(data)
    if (categoria.message) return next(categoria)

    response.success(req, res, {info: 'categoria agregada exitosamente'}, 201)
  },

  actualizarConfig: async (req, res, next) => {
    const data = req.body
    const id = data.id
    const img = req.files.logo.path.split('/').pop()

    if (req.files) {
      const oldImg = await controlador.obtenerConfig(id)
      fs.unlinkSync(`./src/uploads/logo/${oldImg.logo}`)
      data.logo = img
    }

    const newConfig = await configDto.actualizarConfig(id, data)
    if(newProducto.message) return next(newProducto)

    response.success(req, res, {info: 'Configuracion actualizada exitosamente', newConfig}, 201)
  },

  obtenerConfig: async (req, res, next) => {
    const data = req.body.id
    const config = await configDto.obtenerConfig(data)
    if (config.message) return next(config)

    response.success(req, res, {info: 'Busqueda exitosa', config}, 200)
  }





}
