const passport = require('passport');

// requests users account info from google
module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
      
// gets user account info after verifying with google
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    console.log("app.get from AuthRoutes: ", req.user)
    res.redirect('https://study-live.herokuapp.com/main');
  });      
}