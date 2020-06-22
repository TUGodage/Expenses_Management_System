const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    email: String,
    password: String,
    access_token: String
});

// Remove password
Schema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret['password']
        return ret
    }
})

module.exports = mongoose.model('User', Schema);