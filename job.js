// const moment = require('moment');
const moment = require('moment-timezone');

function sayHello() {
    console.log('Heroku Schehuler pinged the Study-Live site at: ', moment().tz("America/Los_Angeles").format('MMMM Do YYYY, h:mm:ss a'));
}
sayHello();