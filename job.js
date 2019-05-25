// const moment = require('moment');
const moment = require('moment-timezone');
const ping = require('node-http-ping')

function sayHello() {
    ping('https://study-live.herokuapp.com')
    .then(time => console.log(`Response time: ${time}ms`))
    .catch(() => console.log('Failed to ping study-live.herokuapp.com'))

    console.log('Heroku Schehuler ran the ping at: ', moment().tz("America/Los_Angeles").format('MMMM Do YYYY, h:mm:ss a'));
}
sayHello();