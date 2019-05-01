const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/study_live_db`, {useNewUrlParser: true});
const db = mongoose.connection;

db.on(`error`, error => {
    console.log(error);
});

db.once(`open`, () => {
    console.log(`Mongo DB connected!`);
});

module.exports = db;