const modelCliente = require('./cliente.model.js')

module.exports = {

  createCliente: async (dataUser) => {
    try {
      const cliente = new modelCliente(dataUser)
      await cliente.save()
      return cliente
    } catch (err) {
      return err
    }

  },

  buscarCliente: async (parametro) => {
    try {
        const cliente = await modelCliente.findOne({email: parametro.email})
        return cliente
    } catch (err) {
      return err
      }

  },

  buscarClienteID: async (parametro) => {
    try {
      const cliente = await modelCliente.findById(parametro)
      return cliente
    } catch (err) {
      return err
    }

  },

  buscarClientes: async () => {
    try {
      const clientes = await modelCliente.find({})
      return clientes
    } catch (err) {
      return err
    }

  },

  clienteUpdate: async (parametroBusqueda, parametroActualizar) => {
    try {
      const clienteActualizado = await modelCliente.findByIdAndUpdate(parametroBusqueda, parametroActualizar)

      return clienteActualizado
    } catch (err) {
      return err
    }

  },

}
