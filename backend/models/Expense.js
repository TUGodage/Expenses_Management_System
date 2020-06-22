const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title: String,
    amount: Number,
    datetime: Date,
    date: Date,
    description: String,
    type: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Expense', Schema);