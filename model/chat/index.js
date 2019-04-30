const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema ({
    username: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    timestamp: {
        type: Date,
        required: true
    }
})

const Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;