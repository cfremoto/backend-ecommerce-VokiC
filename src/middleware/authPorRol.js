const auth = require('../helpers/auth.helpers.js')
const clienteAuth = require('../api-services/auth/auth.dto.js')


module.exports = {

  checkLogin: async (req, res, next) => {

    const decoder = getToken(req)
    if(decoder.message) return next(decoder)

    const cliente = await clienteAuth.buscarCliente(decoder.email)
    if (cliente.message) return next(cliente)

    next()
  },

  verifyRol: async (req, res, next) => {

    const decoder = getToken(req)

    if(decoder.rol !== 'admin') return next(decoder)

    next()
  }


}


const getToken = (req, res) => {
  const token = req.headers.authorization.split(' ').pop()
  return auth.decoderToken(token)
}
