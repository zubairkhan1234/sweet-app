var express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var jwt = require('jsonwebtoken');
var postmark = require("postmark");
var { SERVER_SECRET } = require("../core/index");
var client = new postmark.Client("b13e0642-c597-4c7d-a9d7-ca1d3cb3a3a2");


var { userModle, otpModel } = require("../dbrepo/modles");
console.log("userModle: ", userModle)
var api = express.Router()


api.post('/signup', (req, res, next) => {

    console.log(req.body.userName)
    console.log(req.body.userEmail)
    console.log(req.body.userPhone)
    console.log(req.body.userPassword)
    if (!req.body.userName
        || !req.body.userEmail
        || !req.body.userPhone
        || !req.body.userPassword) {
        res.status(403).send(`
        please send complete information
        e.g:
        {
            "name": "xyz",
            "email": "xyz@gmail.com",
            "password": "1234",
            "phone": "01312314",
        }`);
        return
    };



    userModle.findOne({ email: req.body.userEmail }).then((data) => {
        console.log("respose ", res)

        if (!data) {
            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(req.body.userPassword, salt, function (err, hash) {
                    // Store hash in your password DB.

                    var newUaser = new userModle({
                        "name": req.body.userName,
                        "email": req.body.userEmail,
                        "password": hash,
                        "phone": req.body.userPhone,
                    });

                    newUaser.save().then(() => {
                        res.status(200).send({
                            message: "User created"
                        })
                    }).catch((error) => {
                        res.status(403).send({
                            message: "user already exist"
                        })
                    });
                });
            });
            // bcrypt.stringToHash(req.body.userPassword).then(function (HashPassword) {


            // })


        } else {
            res.status(403).send({
                message: "User already exist"
            })
        }
    }).catch((error) => {
        console.log('error in signUP api ', error)
        res.status(500).send({
            message: "db error"
        })
    })
});

api.post("/login", (req, res, next) => {
    console.log(req.body)
    console.log(req.body.password)

    if (!req.body.email || !req.body.password) {

        res.status(403).send(`
            please send email and passwod in json body.
            e.g:
            {
                "email": "malikasinger@gmail.com",
                "password": "abc",
            }`)
        return;
    }

    userModle.findOne({ email: req.body.email }).then((loginRequestUser) => {

        if (loginRequestUser) {
            console.log(loginRequestUser)
            bcrypt.compare(req.body.password, loginRequestUser.password, function (err, result) {
                if (result) {
                    var token = jwt.sign({
                        name: loginRequestUser.name,
                        email: loginRequestUser.email,
                        phone: loginRequestUser.phone,
                        role: loginRequestUser.role,
                        id: loginRequestUser.id,
                        ip: req.connection.remoteAddress

                    }, SERVER_SECRET);
                    console.log("login token", token)
                    res.cookie('jToken', token, {
                        maxAge: 86_400_000,
                        httpOnly: true
                    });
                    res.send({
                        message: "login success",
                        status: 200,

                        loginRequestUser: {
                            name: loginRequestUser.name,
                            email: loginRequestUser.email,
                            phone: loginRequestUser.phone,
                            role: loginRequestUser.role
                        }
                    })

                } else {
                    console.log('not matched')
                    res.send({
                        message: "Invalid Credentails",
                        status: 404
                    })
                }
            });
        } else {
            res.send({
                message: "Invalid Credentails",
                status: 403
            })
        }

    }).catch((error) => {

    })
})

api.post("/logout", (req, res, next) => {

    res.cookie('jToken', "", {
        maxAge: 86_400_000,
        httpOnly: true
    });

    res.status(200).send({
        message: ("logout success")
    });
})

api.post("/forget-password", (req, res, next) => {

    console.log(req.body.forgetEmail)
    if (!req.body.forgetEmail) {

        res.status(403).send(`
            please send email in json body.
            e.g:
            {
                "forgetEmail": "malikasinger@gmail.com"
            }`)
        return;
    }

    userModle.findOne({ email: req.body.forgetEmail },
        function (err, user) {
            if (err) {
                res.status(500).send({
                    message: "an error occured: " + JSON.stringify(err)
                });
            } else if (user) {
                const otp = Math.floor(getRandomArbitrary(11111, 99999))

                otpModel.create({
                    email: req.body.forgetEmail,
                    otpCode: otp
                }).then((doc) => {

                    client.sendEmail({
                        "From": "zubair_student@sysborg.com",
                        "To": req.body.forgetEmail,
                        "Subject": "Reset your password",
                        "TextBody": `Here is your pasword reset code: ${otp}`
                    }).then((status) => {

                        console.log("status: ", status);
                        res.status(200).send({
                            message: "email sent with otp"
                        })

                    })

                }).catch((err) => {
                    console.log("error in creating otp: ", err);
                    res.send({

                        message: "unexpected error "
                    })
                })


            } else {
                res.send({
                    message: "user not found"
                });
            }
        });
})

api.post("/forget-password-step-2", (req, res, next) => {

    console.log(req.body.otpCode)
    console.log(req.body.newPassword)
    console.log(req.body.emailVarification)

    if (!req.body.emailVarification && !req.body.otpCode && !req.body.newPassword) {

        res.status(403).send(`
            please send emailVarification & otp in json body.
            e.g:
            {
                "emailVarification": "malikasinger@gmail.com",
                "newPassword": "xxxxxx",
                "otp": "xxxxx" 
            }`)
        return;
    }

    userModle.findOne({ email: req.body.emailVarification },
        function (err, user) {
            console.log(err)
            if (err) {
                res.status(500).send({
                    message: "an error occured: " + JSON.stringify(err)
                });
            } else if (user) {

                otpModel.find({ email: req.body.emailVarification },
                    function (err, otpData) {



                        if (err) {
                            res.send({
                                message: "an error occured: " + JSON.stringify(err)
                            });
                        } else if (otpData) {
                            otpData = otpData[otpData.length - 1]

                            console.log("otpData: ", otpData);

                            const now = new Date().getTime();
                            const otpIat = new Date(otpData.createdOn).getTime();
                            const diff = now - otpIat;

                            console.log("diff: ", diff);

                            if (otpData.otpCode === req.body.otpCode && diff < 300000) {

                                bcrypt.stringToHash(req.body.newPassword).then(function (hash) {
                                    user.update({ password: hash }, {}, function (err, data) {
                                        res.status(200).send({
                                            message: "password updated"
                                        });
                                    })
                                })

                            } else {
                                res.send({
                                    message: "incorrect otp"
                                });
                            }
                        } else {
                            res.send({
                                message: "incorrect otp"
                            });
                        }
                    })

            } else {
                res.send({
                    message: "user not found"
                });
            }
        });
})


module.exports = api

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
} 
