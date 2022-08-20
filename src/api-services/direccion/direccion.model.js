const { model, Schema } = require('mongoose')

const direccionSchema = new Schema({
  cliente: {type: Schema.ObjectId, ref: 'cliente', required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    cedula: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    referencia: {type: String, required: false},

    pais: {type: String, required: true},
    region: {type: String, required: false},
    provincia: {type: String, required: false},
    distrito: {type: String, required: false},

    zona: {type: String, required: true},
    zip: {type: String, required: false},

    status: {type: Boolean,default: true, required: false},

    principal: {type: Boolean, required: true}
}, { versionKey: false, timestamps: true })

module.exports = model('Direccion', direccionSchema)
