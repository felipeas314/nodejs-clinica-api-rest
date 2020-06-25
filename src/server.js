const express = require("express");
const routes = require("./routes");
require("./app/database/postgresql");

const app = express();

app.use(express.json());

app.use('/api', routes);

exports.App = app;
