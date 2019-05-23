const path = require("path");
const express = require("express");
const router = express.Router();
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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/client/public/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/client/public/index.html"));
  });
}

module.exports = router;
