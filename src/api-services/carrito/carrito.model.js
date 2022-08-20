const { model, Schema } = require('mongoose')

const carritoSchema = new Schema({
  producto: { type: Schema.ObjectId, ref: 'Producto' },
  cliente: { type: Schema.ObjectId, ref: 'Cliente' },
  cantidad: { type: Number },
  variedad: { type: Schema.ObjectId, ref: 'Variedad' },
}, { versionKey: false, timestamps: true })

module.exports = model('Carrito', carritoSchema)
