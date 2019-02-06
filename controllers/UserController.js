var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/userModel');
var config = require('../utilities/config');

module.exports.signin = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let userData;
    User.findByUsername(username)
        .then(([result, fields]) => {
            userData = result[0];
            return bcrypt.compare(password, result[0].password);
        })
        .then(result => {
            if (result) {
                delete userData.password;
                payload = { username: userData.username, id: userData.id };
                let token = jwt.sign(
                    payload,
                    config.secret,
                    { expiresIn: '1h' }
                );
                res.status(200).json({ isSuccess: true, token: "Bearer " + token, message: 'Logged-in successfully', data: userData });
            } else {
                res.status(200).json({ isSuccess: false, message: 'Username and password not matched' });
            }
        })
        .catch(error => {
            console.log(error);
        });
}

module.exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 16).then(hash => {
        let name = req.body.name;
        let username = req.body.username;
        let password = hash;
        let created = new Date().toISOString().slice(0, 19).replace('T', ' ');;
        let modified = new Date().toISOString().slice(0, 19).replace('T', ' ');;
        let user = new User(null, name, username, password, created, modified);
        user.save()
            .then(result => {
                res.status(201).json({
                    isSuccess: true,
                    message: 'User registered successfully'
                });
            })
            .catch(error => {
                console.log(error);
            });
    });
}

module.exports.getProfile = (req, res, next) => {
    res.status(200).json({
        isSuccess: true,
        data: req.authData
    });
}

module.exports.updateProfile = (req, res, next) => {
    res.status(200).json({
        isSuccess: true,
    });
}

module.exports.getRequests = (req, res, next) => {
    res.status(200).json({
        isSuccess: true,
    });
}

module.exports.acceptRequests = (req, res, next) => {
    res.status(200).json({
        isSuccess: true,
    });
}

module.exports.getChatList = (req, res, next) => {
    res.status(200).json({
        isSuccess: true,
    });
}

module.exports.getChat = (req, res, next) => {
    res.status(200).json({
        isSuccess: true,
    });
}