require("../../config/connection");
const express = require('express');
const app = express();
const chatRouter = require('../../routes/chat');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/chat', chatRouter);

app.listen(8001, () => {
    console.log('chat db listening on port 8001');
});