const { model, Schema } = require('mongoose')

const variedadSchema = new Schema({
    producto: {type: Schema.ObjectId, ref: 'producto', required: true},
    valor: {type: String, required: true},
    stock: {type: String, default: 0, required: true}
}, { versionKey: false, timestamps: true })

module.exports = model('Variedad', variedadSchema)
