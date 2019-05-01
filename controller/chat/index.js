const Chat = require('../../model/chat');

exports.getMessages = async (req, res) => {
    try {
        const chat = await Chat.find({});
        res.json({ chat });
    }
    catch (error) {
        res.json({ error });
    }
}

exports.saveMessages = async (req, res) => {
    try {
        const chat = req.body;

        const saveChat = new Chat({
            username: chat.username,
            message: chat.message,
            timestamp: chat.timestamp
        })

        await saveChat.save();
        res.json({ message: "OK", saveChat });
    }
    catch (error) {
        res.json({ error });
    }
}