const express = require("express");
const routes = require("./routes");
let mongoose = require("./config/mongoose");

app = express();
app.use(routes);
app.use(express.json());
  
exports.App = app;
