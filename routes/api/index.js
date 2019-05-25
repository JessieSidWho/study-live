const router = require("express").Router();
const chatRouter = require("./../chat");
const db = require('./../../model');
// const todoRoutes = require('./todoRoutes');

// gets info for all users
router.get('/users', async (req, res) => {
    console.log(req.user);
    
    const users = await db.User.find();
    res.json(users);
});

// Handles saving the Chat messages to Mongo DB
router.use('/chat', chatRouter);

// gets the info for the current user
router.get('/currentUser', (req, res) => {
    console.log(req.user);
    res.json(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('https://study-live.herokuapp.com');
});

module.exports = router;
