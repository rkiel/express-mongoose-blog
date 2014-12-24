var mongoose = require('mongoose');
var User     = mongoose.model('User');

var cleanString = require('../helpers/cleanString');
var hash        = require('../helpers/hash');
var crypto      = require('crypto');

module.exports = function(app) {

  app.get('/signup', function(req, res) {
    res.render('signup.jade');
  });

  app.post('/signup', function(req, res) {
    var email = cleanString(req.param('email'));  // bodyParser
    var pass  = cleanString(req.param('pass'));  // bodyParser
    if (!(email && pass)) {
      return invalid();
    }

    User.findById(email, function(err, user) {
      if (err) return next(err);
      if (user) {
        return res.render('signup.jade', {exists: true});
      }
      crypto.randomBytes(16, function(err, bytes) {
        if (err) return next(err);

        var user = { _id: email };
        user.salt = bytes.toString('utf8');
        user.hash = hash(pass, user.salt);
        User.create(user, function(err, newUser) {
          if (err) {
            if (err instanceof mongoose.Error.ValidationError) {
              return invalid();
            }
            return next(err);

            req.session.isLoggedIn = true;
            req.session.email = email;
            console.log('created user: %s', email);
            return res.redirect('/');
        });
      });
    });

    function invalid() {
      return res.render('signup.jade', {invalid: true});
    }
  });
}
