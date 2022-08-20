const { model, Schema } = require('mongoose')

const inventarioSchema = new Schema({
    producto: { type: Schema.ObjectId, ref: 'Producto', required: true },
    proveedor: { type: String, default: 'Primer Ingreso'},
    cantidad: {type: Number, require: true}
}, { versionKey: false, timestamps: true })

module.exports = model('Inventario', inventarioSchema)
