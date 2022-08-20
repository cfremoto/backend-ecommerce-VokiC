const { model, Schema } = require('mongoose')

const configSchema = new Schema({
  envio_activacion: { type: String },
  monto_min_bs: { type: Number },
  monto_min_dolares: { type: Number }
}, { versionKey: false, timestamps: true })

module.exports = model('Config', configSchema)
