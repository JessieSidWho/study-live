const router = require("express").Router();
const userController = require('./../../controller/user');
const db = require('./../../model');

router.route('/home')
    .get(userController.getTodos)
    .post(userController.addTodo)


module.exports = router;
