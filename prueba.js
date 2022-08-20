require('dotenv').config()
const decoder = require('./src/helpers/auth.helpers')
const Cliente = require('./src/api-services/clientes/cliente.model.js')
const path = require('path')
const fs = require('fs')

const sendMail = require('./src/micro-servicios/sendEmail.js')


fs.unlinkSync('./src/uploads/productos/Xf8ayKHmSaTtDxbQpi_XKkvk.png')


// let info = {
//   to: 'cesar.bfernandez@gmail.com',
//   subject: 'Email de prueba',
//   html: `<p>Email de prueba <strong>cesar.bfernandez@gmail.com</strong></p>`
// }

// // console.log(decoder.decoderToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZ1bmNpb25hIiwiaWF0IjoxNjYwNzU2ODAwLCJleHAiOjE2NjA3NTc3MDB9.36KZ_eTQRE0GkOIuVQJHSSyZjKYb-tpkm5LfsQqVQZ4'))

// //sendMail(info).catch(console.error)

// //console.log(decoder.signToken({id: 'funciona'}))

// const buscarCliente = (parametro) => {

//     const cliente = Cliente.find({email: 'cesar.bfernandez@gmail.com'})

//     return cliente
// }
