const express = require("express");
const routes = require("./routes");
require("./app/database/postgresql");

app = express();
app.use(routes);
app.use(express.json());
  
exports.App = app;
