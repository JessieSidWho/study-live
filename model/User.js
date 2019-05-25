const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// schema for saving our users information.

const UserSchema = new Schema({
    googleId: String,
    name: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;