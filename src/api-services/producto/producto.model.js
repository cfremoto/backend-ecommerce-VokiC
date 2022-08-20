const { model, Schema } = require('mongoose')

const productoSchema = new Schema({
    titulo: {type: String, required: true},
    slug: {type: String, required: true},
    portada: {type: String, required: true},
    precio_antes_bs: {type: Number,default: 0, required: true},
    precio_antes_dolares: {type: Number,default: 0, required: true},
    precio: {type: Number, required: true},
    precio_dolar: {type: Number, required: true},
    sku: {type: String, required: true},
    descripcion: {type: String, required: true},
    contenido: {type: String, required: true},
    nventas: {type: Number, default: 0, required: true},
    categoria: {type: String, required: true},
    visibilidad: {type: String, required: true},

    stock: {type: Number,default:0 ,required: false},
    galeria: [{type: Object, required: false}],
    peso: {type: String, required: false},

    estado: {type: String, default: 'Edicion', required: false}
}, { versionKey: false, timestamps: true })

module.exports = model('Producto', productoSchema)
