
module.exports = function(app) {

  app.use(function(req,res,next) {
    res.status(404);

    if (req.accepts('html')) {
      return res.send('<h2>Could not find that page</h2>');
    }
    if (req.accepts('json')) {
      return res.json({error: 'not found'});
    }

    res.type('txt');
    res.send('count not find that page');
  });

  app.use(function(err,req,res,next) {
    console.error('error at %s\n', req.url, err);
    res.send(500, 'yikes! something went wrong');
  });
}
