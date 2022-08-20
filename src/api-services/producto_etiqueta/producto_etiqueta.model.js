const { model, Schema } = require('mongoose')

const productoEtiquetaSchema = new Schema({
    producto: {type: Schema.ObjectId, ref: 'producto', required: true},
    etiqueta: {type: Schema.ObjectId, ref: 'etiqueta', required: true}
}, { versionKey: false, timestamps: true })

module.exports = model('ProductoEtiqueta', productoEtiquetaSchema)
