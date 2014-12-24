var errors = require('./errors'),
    login  = require('./login');

module.exports = function(app) {

  // home page
  app.get('/', function(req,res) {
    res.render('home.jade');
  });

  login(app);

  errors(app);
}
