var jwt = require('jsonwebtoken');
var config = require('../utilities/config');

module.exports = (req, res, next) => {
    const token = (req.body.token || req.query.token || req.headers['x-access-token']).split(' ')[1];
    if (token) {
        let decoded = jwt.verify(token, config.secret);
        req.authData = decoded;
        next();
    } else {
        const error = new Error('Authentication token is missing');
        error.status = 401;
        throw error;
    }
}