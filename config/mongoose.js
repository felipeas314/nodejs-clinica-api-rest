const mongoose = require("mongoose");

mongoose.connect("mongodb://172.17.0.2:27017/clinica",{
    useCreateIndex: true,
    useNewUrlParser: true
});

module.exports = mongoose;
