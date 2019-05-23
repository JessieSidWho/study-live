const path = require("path");
const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");
// const chatRouter = require("./chat");
// const db = require('./../model');

// router.get('/users', async (req, res) => {
//     console.log(req.user);
    
//     const users = await db.User.find();
//     res.json(users);
// });

// // Handles saving the Chat messages to Mongo DB
// router.use('/chat', chatRouter);

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
