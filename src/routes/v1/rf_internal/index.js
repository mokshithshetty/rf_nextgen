const express = require('express')
const helmet = require('helmet')
const router = express.Router()
router.use(helmet.hidePoweredBy())

// Import route files

// group routes

module.exports = router
