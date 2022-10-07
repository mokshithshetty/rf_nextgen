class AppError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    // Used when user fails to include a field
    // Also used when user enters incorrect information
    static badRequest(msg) {
        return new AppError(400, msg || 'Incorrect details');
    }

    // Used when user enters incorrect login information
    static unAuthorized(msg) {
        return new AppError(401, msg || 'Unauthorized');
    }

    // Used when user is not allowed to access the endpoint
    static forBidden(msg) {
        return new AppError(403, msg || 'Access denied');
    }

    // Used when the endpoint cannot be found
    // Also be used when requested resource not found
    static notFound(msg) {
        return new AppError(404, msg || 'Not found');
    }

    // Request entity is larger than limits defined by server.
    static payloadTooLarge(msg) {
        return new AppError(413, msg || 'File size exceeded');
    }

    // Unsupported media type
    static unSupported(msg) {
        return new AppError(415, msg || 'Unsupported File');
    }

    // Internal server error
    static internal(msg) {
        return new AppError(500, msg || 'Server Error');
    }
}

module.exports = AppError;
