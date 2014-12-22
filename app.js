var mongoose = require('mongoose'),
    express  = require('express');

mongoose.connect('mongodb://192.168.33.30', function(err) {
    if (err) throw err;
    console.log("connnected!");

    var app = express();
    app.get('/', function(req,res) {
      res.send(200, 'hello mongoose blog');
    });

    app.listen(3000, function() {
      console.log('now listening on http://192.168.33.60:3000');
    });
});
