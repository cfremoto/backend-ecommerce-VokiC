const authDto = require('./auth.dto.js')
const response = require('../../network/response.js')
const sendMail = require('../../micro-servicios/sendEmail.js')
const auth = require('../../helpers/auth.helpers.js')

module.exports = {


  createCliente: async (data) => {
    const cliente = await authDto.createCliente(data)
    if (!cliente) return response.error(req, res, 'No se a podido crear el cliente', 403, '')

    let info = {
      to: `${data.email}`,
      subject: 'Registro eXITOSO!! :)',
      html: `<p>Bienvenido!!! Ahora eres parte de la familia de <strong>E-COMMERCE PRUEBA</strong></p>`
    }

    sendMail(info)

    return cliente
  },

  login: async (req, res) => {

    const { email, password } = req.body

    const cliente = await authDto.buscarCliente(email)

    const match = await auth.matchPass(password, cliente.password)
    if (!match) return response.error(req, res, 'Datos Invalidos', 401, '')

    const token = auth.signToken({email: cliente.email, rol: cliente.rol})

    response.success(req, res, {message: 'Logeo exitoso', token}, 200)

  },


}
