const { model, Schema } = require('mongoose')

const detalleVentaSchema = new Schema({
    producto: {type: Schema.ObjectId, ref: 'producto', required: true},
    venta: {type: Schema.ObjectId, ref: 'venta', require: true},
    subtotal: {type: Number, require: true},
    variedad: {type: Schema.ObjectId, ref: 'variedad', require: true},
    cantidad: {type: Number, require: true},
    cliente: {type: Schema.ObjectId, ref: 'cliente', required: true}
}, { versionKey: false, timestamps: true })

module.exports = model('DetalleVenta', detalleVentaSchema)
