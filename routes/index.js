
module.exports = function(app) {

  // home page
  app.get('/', function(req,res) {
    res.send(200, 'hello mongoose blog');
  });

}
