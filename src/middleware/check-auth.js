const AppError = require('../utils/appError')
const { userDetails } = require('../helpers/index')
const db = require('../../config/dbConn')

const checkauth = async (req, res, next) => {
    try {
        const token = req.cookies.JSESSIONID || ''

        const query = `select USER_NAME as USER,USER_ID,USER_LOGIN from USERS
    join USER_SESSIONS on USERS.USER_ID = SSN_USER_ID and SSN_SESSION = ? limit 1`

        const session = await db.query(query, [token])
        let user
        if (session.length == 0) {
            user = { username: '', isValid: false }
        } else {
            user = { username: session[0].USER, isValid: true }
        }
        return res.status(200).json(user)
    } catch (error) {
        next(AppError.unAuthorized())
    }
}

const Authenticationcheck = async (req, res, next) => {
    try {
        const user = await loginCheck(req, res, next)
        return res.status(200).json(user)
    } catch (e) {
        next(AppError.internal())
    }
}

const loginCheck = async (req, res, next) => {
    let userData
    const token = req.cookies.token || ''
    if (!token || !req.session.uniqId) {
        userData = { username: '', isValid: false }
        return userData
    }
    const decodeToken = userDetails(req, res, next)
    userData = { username: decodeToken.loginName, isValid: true }
    return userData
}

// Authenticating User
const checkauthentication = async (req, res, next) => {
    try {
        const token = req.cookies.JSESSIONID || ''

        const query = `select USER_NAME as USER,USER_ID,USER_LOGIN from USERS
    join USER_SESSIONS on USERS.USER_ID = SSN_USER_ID and SSN_SESSION = ?`

        const session = await db.query(query, [token])
        if (session.length == 0) {
            next(AppError.unAuthorized())
        } else {
            req.session.userName = session[0].USER
            req.session.userId = session[0].USER_ID
            req.session.userLogin = session[0].USER_LOGIN

            next()
        }
    } catch (error) {
        next(AppError.unAuthorized())
    }
}
module.exports = {
    checkauth,
    Authenticationcheck,
    checkauthentication
}
