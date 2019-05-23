const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const chatRouter = require("./chat");
const db = require('./../model');

router.get('/users', async (req, res) => {
    console.log(req.user);
    
    const users = await db.User.find();
    res.json(users);
});

// Handles saving the Chat messages to Mongo DB
router.use('/chat', chatRouter);

// API Routes
router.use("/api", apiRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
