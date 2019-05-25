var express = require('express');
var router = express.Router();
var chatController = require('../../controller/chat');

// get all chat messages
router.get('/', chatController.getMessages);

// saves chat message to database
router.post('/save', chatController.saveMessages);

module.exports = router;
