const mongoose = require("mongoose");

mongoose.connect("mongodb://172.17.0.6:27017/delivery", { useNewUrlParser: true });

module.exports = mongoose;
