const { Schema, model } = require('mongoose')

const clienteSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  pais: { type: String, required: false },
  email: { type: String, required: true },
  telefono: { type: String, required: false },
  genero: { type: String, required: false },
  f_nacimiento: { type: String, required: false },
  cedula: { type: String, required: true }
}, { versionKey: false, timestamps: true })



module.exports = model('Cliente', clienteSchema)
