const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/auth/google', { target: `https://study-live.herokuapp.com`, changeOrigin: true } ));
    app.use(proxy('/api/**', { target: `https://study-live.herokuapp.com`, changeOrigin: true } ));
};