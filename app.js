var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.33.30', function(err) {
    if (err) throw err;
    console.log("connnected!");
    mongoose.disconnect();
});
