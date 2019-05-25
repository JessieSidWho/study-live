const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for saving the chat messages.

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
        type: String,
        required: true
    }
})

const Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;