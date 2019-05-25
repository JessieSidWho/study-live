const moment = require('moment');

function sayHello() {
    console.log('Heroku Schehuler pinged the Study-Live site at: ', moment().format('MMMM Do YYYY, h:mm:ss a'));
}
sayHello();