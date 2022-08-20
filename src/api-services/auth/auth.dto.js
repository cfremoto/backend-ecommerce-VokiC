const modelAuth = require('./auth.model.js')
const helpersAuth = require('../../helpers/auth.helpers.js')

module.exports = {
  createCliente: async (dataUser) => {
      const cliente = modelAuth(dataUser)
      await cliente.save()
      return cliente
  },

  buscarCliente: async (parametro) => {

    const cliente = await modelAuth.findOne({ email: parametro })
    return cliente
  },

  buscarClienteID: async (parametro) => {
    console.log(parametro)
    const cliente = await modelAuth.findById(parametro)
    return cliente
  },

  clienteUpdatePass: async (parametroBusqueda, parametroActualizar) => {

    const pass = await helpersAuth.hashPass(parametroActualizar)

    const cliente = await modelAuth.findOne({ user: parametroBusqueda })

    const clienteActualizado = await modelAuth.findByIdAndUpdate({ _id: cliente._id }, {password: pass}, {new: true})

    return clienteActualizado
  }
}
