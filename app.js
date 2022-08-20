//imports
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const dbConnect = require('./src/config/db.js')
const errors = require('./src/middleware/manejadorError.js')
const swaggerUi = require('swagger-ui-express')

//documentation
const swaggerDoc = require('./src/api-services/swagger.json')

//instancia de express
const app = express()

//db
dbConnect()

//middleware
app.use(express.urlencoded({ extended: true, limit: '50Mb' }))
app.use(express.json({ limit: '50Mb'}))
app.use(cors())

//router
app.use('/api/v1', require('./src/network'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

//Errors
app.use(errors)

//exports de app para inyectar en inicio del server
module.exports = app
