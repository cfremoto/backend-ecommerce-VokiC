require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

module.exports = {

  signToken: (info) => {
    return jwt.sign(info, process.env.JWT_SERCRET, { expiresIn: '15Min' })
  },


  decoderToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SERCRET)
    } catch (err) {
      return err
    }

  },

  matchPass: async (password, authPassword) => {
    return await bcrypt.compare(password, authPassword)
  },

  hashPass: async (password) => {
    const salt = await bcrypt.genSalt()
    const pass = await bcrypt.hash(password, salt)
    return pass
  },

  verifyRol: async (rol, authRol) => {

  },

  validateResult: (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (err) {
      return next(err)
    }
  }
}
