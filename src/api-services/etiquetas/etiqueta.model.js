const { model, Schema } = require('mongoose')

const etiquetaSchema = new Schema({
    titulo: {type: String, required: true},
    slug: {type: String, required: true}
}, { versionKey: false, timestamps: true })

module.exports = module('Etiqueta', etiquetaSchema)
