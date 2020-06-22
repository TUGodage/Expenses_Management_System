const User = require('../models/User'); // User model
const jwt = require("jsonwebtoken"); // JWT for tokens
const bcrypt = require("bcryptjs"); // Bcrypt for hashing

// Signup
exports.signUp = function(req, res) {
    User.findOne(req.body.email, (err, doc) => {
        if (doc) {
            res.json({ "status": "failed", "message": "User exists!" });
        } else {
            var user = new User(req.body);
            user.password = bcrypt.hashSync(user.password, 10);
            user.save((err, doc) => {
                if (err || !doc) {
                    res.json({ "status": "failed", "message": "Server error!" }).status(500);
                } else {
                    res.json({ "status": "success", "payload": doc });
                }

            })
        }
    })
}

// Login
exports.login = function(req, res) {
    User.findOne({ email: req.body.email }, (err, doc) => {
        if (err) {
            res.json({ "status": "failed", "message": "Server error!" }).status(500);
        } else if (!doc) {
            res.json({ "status": "failed", "message": "Invalid email/password" });
        } else {
            const pw = doc.password;
            if (bcrypt.compareSync(req.body.password, pw)) {
                const token = jwt.sign({
                        id: doc._id
                    },
                    process.env.JWT_KEY
                );

                doc.access_token = token;

                res.json({ "status": "success", "payload": doc });
            } else {
                res.json({ "status": "failed", "message": "Invalid email/password" });
            }
        }
    });
}