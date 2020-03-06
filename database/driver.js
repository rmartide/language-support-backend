const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lsb', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {
    mongoose
}