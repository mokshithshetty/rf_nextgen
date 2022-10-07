const express = require('express')
const app = express()
app.disable('x-powered-by')

// route files
const resourceRoute = require('../routes/v1/resources')
const rfInternalRoute = require('../routes/v1/rf_internal')

// route middleware
app.use('/api/v1/resources', resourceRoute)
app.use('/api/v1/rf_internal', rfInternalRoute)

module.exports = app
