const { model, Schema } = require('mongoose')

const reviewSchema = new Schema({
    producto: {type: Schema.ObjectId, ref: 'producto', required: true},
    cliente: {type: Schema.ObjectId, ref: 'cliente', required: true},
    venta: {type: Schema.ObjectId, ref: 'venta', required: true},
    review: {type: String, required: true},
    estrellas: {type: Number, required: true}
}, { versionKey: false, timestamps: true })

module.exports = model('Review', reviewSchema)
