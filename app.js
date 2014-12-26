var mongoose = require('mongoose'),
    express  = require('express'),
    routes   = require('./routes');

require('./models/user');

mongoose.connect('mongodb://192.168.33.30/blog', function(err) {
    if (err) throw err;
    console.log("connnected!");

    var app = express();
    routes(app);

    app.listen(3000, function() {
      console.log('now listening on http://192.168.33.60:3000');
    });
});
