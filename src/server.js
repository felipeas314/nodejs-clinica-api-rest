process.env.NODE_CONFIG_DIR = `${__dirname}/app/config`;
const express = require("express");
const routes = require("./routes");
require("./app/database/postgresql");

const app = express();

app.use(express.json());

app.use('/api', routes);

exports.App = app;
