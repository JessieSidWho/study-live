require("./sockets/server");

require("./config/connection");
const app = require('express')();
const chatRouter = require('./routes/chat');
app.use('/chat', chatRouter);

app.listen(8001, () => {
    console.log('chat db listening on port 8001');
});