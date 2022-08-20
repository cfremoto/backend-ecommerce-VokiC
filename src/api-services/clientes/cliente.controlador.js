const response = require('../../network/response.js')
const clienteDto = require('./cliente.dto.js')
const auth = require('../auth/auth.controlador.js')
const authDto = require('../auth/auth.dto.js')

module.exports = {


  crearCliente: async (req, res, next) => {
    let busqueda = {}
    if (req.body.email) busqueda = { email: req.body.email }

    const cliente = await clienteDto.buscarCliente(busqueda)
    if (cliente.message) return next(cliente)

    const newCliente = await clienteDto.createCliente(req.body)

    const newClienteAuth = await auth.createCliente({
      user: newCliente._id,
      email: newCliente.email,
      password: req.body.password,
      rol: req.body.rol,
    })

    response.success(req, res, {info: 'creado exitosamente', newCliente}, 201)
  },

  obtenerCliente: async (req, res, next) => {
    const parametro = req.body

    let busqueda = {}
    if (parametro.email) busqueda = { email: parametro.email }
    if (!parametro.email) busqueda = { _id: parametro.id }

    const cliente = await clienteDto.buscarCliente(busqueda)

    response.success(req, res, {info: 'Busqueda exitosa', cliente}, 200)
  },

  obtenerClientes: async (req, res, next) => {
    const clientes = await clienteDto.buscarClientes()
    if (clientes.message) return next(clientes)

    response.success(req, res, {info: 'Busqueda exitosa', clientes}, 200)
  },

  clienteUpdate: async (req, res) => {

    const parametroActualizar = req.body

    const cliente = await clienteDto.buscarClienteID(req.params['id'])
    if (cliente.message) return next(cliente)

    const newCliente = await clienteDto.clienteUpdate(req.params['id'], parametroActualizar)

    response.success(req, res, {info: 'Actualizacion exitosa', newCliente}, 200)
  },

  clienteUpdatePass: async (req, res) => {

    const cliente = await clienteDto.buscarClienteID(req.params['id'])
    if(cliente.message) return next(cliente)

    const clienteActualizado = await authDto.clienteUpdatePass(req.params['id'], req.body.password)
    if(clienteActualizado.message) next(clienteActualizado)

    response.success(req, res, {info: 'Actualizacion Exitosa'}, 201)
  }


}
