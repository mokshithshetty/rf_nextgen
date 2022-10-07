const AppError = require('../utils/appError')

// eslint-disable-next-line
module.exports = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.code).json(err.message)
    }

    return res.status(500).json('Something went wrong')
}
