const Chat = require('../../model/chat');

exports.getMessages = async (req, res) => {
    try {
        const chat = await Chat.find({});
        console.log({ chat });
        res.json({ chat });
    }
    catch (error) {
        res.json({ error });
    }
}

exports.saveMessages = async (req, res) => {
    try {
        const chat = req.body;
        console.log(chat);

        const saveChat = new Chat({
            username: chat.username,
            message: chat.message,
            timestamp: chat.timestamp
        })

        await saveChat.saved();
        res.json({ message: "OK", saveChat });
    }
    catch (error) {
        res.json({ error });
    }
}