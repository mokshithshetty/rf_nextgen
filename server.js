require('dotenv').config()
require('./src/utils/global')

const express = require('express')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const passport = require('passport')
const router = require('./src/utils/app')
const globalErrorHandler = require('./src/middleware/errorHandler')

const corsOpton = {
    credentials: true,
    origin: process.env.ALLOWED_ORIGINS.split(',')
}

app.use(cors(corsOpton))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
// Passport middleware
app.use(
    cookieSession({
        name: 'google-auth-session',
        keys: ['key1', 'key2']
    })
)
app.use(passport.initialize())
app.use(passport.session())
const PORT = process.env.PORT || 8000

app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                'frame-ancestors': process.env.ALLOWED_ORIGINS.split(',')
            }
        }
    })
)

// route middleware
app.use(router)

app.all('*', (req, res, next) => {
    next(AppError.notFound(`${req.originalUrl} not found`))
})
app.use(globalErrorHandler)

app.listen(PORT, '0.0.0.0', () => {
    // eslint-disable-next-line
    console.log(`Server is running on port ${PORT}.`)
})
