var express = require('express');
var router = express.Router();
var chatController = require('../../controller/chat');

/* GET users listing. */
router.get('/', chatController.getMessages);
router.post('/save', chatController.saveMessages);

module.exports = router;
