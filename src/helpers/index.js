const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

const getPagination = (page, size) => {
    const limit = size;
    const offset = 0 + (page - 1) * limit;
    return { limit, offset };
};

const getPagingData = (data, page, size) => {
    const { count: totalItems, rows: contents } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / size);
    return {
        totalItems, totalPages, currentPage, contents
    };
};
const userDetails = (req, res, next) => {
    try {
        const token = req.cookies.token || '';
        return jwt.verify(token, process.env.JWT_KEY);
    } catch (error) {
        next(AppError.unAuthorized());
    }
};

module.exports = {
    getPagination,
    getPagingData,
    userDetails
};
