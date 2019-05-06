const mongoose = require("mongoose");
const keys = require('./../keys')
mongoose.connect(`mongodb://${keys.dbuser}:${keys.dbpassword}@ds151876.mlab.com:51876/heroku_4jqld61n`, {useNewUrlParser: true});
const db = mongoose.connection;

db.on(`error`, error => {
    console.log(error);
});

db.once(`open`, () => {
    console.log(`Mongo DB connected!`);
});

module.exports = db;