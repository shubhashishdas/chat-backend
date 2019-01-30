var bcrypt = require('bcryptjs');
var User = require('../models/userModel');

module.exports.signin = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({ isSuccess: true });
}

module.exports.signup = (req, res, next) => {
    // userModel
    //     .fetchAll()
    //     .then(([result, fields]) => {
    //         console.log(result);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });


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
                    // data: req.body
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