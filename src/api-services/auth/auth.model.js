const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const authSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'Cliente' },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rol: {type: String, default: 'user'}
}, { versionKey: false, timestamps: true })

authSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

module.exports = model('Auth', authSchema)
