const Expense = require('../models/Expense'); //  model

exports.create = function(req, res) {
    req.body.user = req.userData.id;
    req.body.datetime = Date.now();
    const expense = new Expense(req.body);
    expense.save((err, doc) => {
        if (err || !doc) {
            res.json({ "status": "failed", "message": "Server error!" }).status(500);
        } else {
            res.json({ "status": "success", "payload": doc });
        }
    })
}

exports.update = function(req, res) {
    Expense.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
        if (err || !doc) {
            res.json({ "status": "failed", "message": "Server error!" }).status(500);
        } else {
            res.json({ "status": "success", "payload": doc });
        }
    })
}

exports.delete = function(req, res) {
    Expense.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err || !doc) {
            res.json({ "status": "failed", "message": "Server error!" }).status(500);
        } else {
            res.json({ "status": "success", "payload": doc });
        }
    })
}

exports.listByUser = function(req, res) {
    Expense.find({ user: req.userData.id, type: req.query.type }, (err, docs) => {
        if (err || !docs) {
            res.json({ "status": "failed", "message": "Server error!" }).status(500);
        } else {
            res.json({ "status": "success", "payload": docs });
        }
    })
}