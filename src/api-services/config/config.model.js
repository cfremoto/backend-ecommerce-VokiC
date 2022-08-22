const { model, Schema } = require('mongoose')

const configSchema = new Schema({
  categorias: [{type: Object}],
  razon_social: { type: String },
  logo: { type: String },
  serie: { type: Number, default: 000001 },
  correlativo: { type: Number, default: 0000001}
}, { versionKey: false, timestamps: true })

module.exports = model('Config', configSchema)
