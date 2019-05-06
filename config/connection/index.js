const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/study_live_db`;

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
const db = mongoose.connection;

db.on(`error`, error => {
    console.log(error);
});

db.once(`open`, () => {
    console.log(`Mongo DB connected!`);
});

module.exports = db;