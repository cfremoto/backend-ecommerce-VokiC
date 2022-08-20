const { model, Schema } = require('mongoose')

const cuponSchema = new Schema({
    codigo: {type: String, required: true},
    disponibilidad: {type: String, required: true},
    valor: {type: Number, required: true},
    limite: {type: Number, required: true},
    tipo: {type: String, required: false},
}, { versionKey: false, timestamps: true })

module.exports = module('Cupon', cuponSchema)
