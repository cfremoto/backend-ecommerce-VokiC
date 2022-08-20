const { model, Schema } = require('mongoose')

const contactoSchema = new Schema({
    cliente: {type: String, required: true},
    mensaje: {type: String, required: true},
    asunto: {type: String, required: true},
    telefono: {type: String, required: true},
    correo: {type: String, required: true},
    estado: {type: String, required: true}
}, { versionKey: false, timestamps: true })

module.exports = module('Contacto', contactoSchema)
